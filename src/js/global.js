export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}
function padLeftZero (str) {
    return ('00' + str).substr(str.length);
  };

export function formatDateMin (secs) {
    var t = new Date(secs)
    var year = t.getFullYear()
    var month = t.getMonth() + 1
    if (month < 10) { month = '0' + month }
    var date = t.getDate()
    if (date < 10) { date = '0' + date }
    var hour = t.getHours()
    if (hour < 10) { hour = '0' + hour }
    var minute = t.getMinutes()
    if (minute < 10) { minute = '0' + minute }
    var second = t.getSeconds()
    if (second < 10) { second = '0' + second }
    // return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
    return year + '-' + month + '-' + date + ' '
}