<template>
    <div class="tj">
        <mt-header fixed title="订餐统计">
            <div slot="left">
              <mt-button @click="$router.back(-1)" icon="back">返回</mt-button>
            </div>
        </mt-header>
        <div class="time-div">
        <mt-button class="t-btn" @click.native="selectData('1')" style="font-size:16px">{{startTime}}{{selectedValue1}}</mt-button>
        <span>至</span>
        <mt-button class="t-btn" @click.native="selectData('2')" style="font-size:16px">{{endTime}}{{selectedValue2}}</mt-button>
        </div>
        <div class="pickerPop" @touchmove.prevent>
           <mt-datetime-picker
                lockScroll="true"
                ref="datePicker1"
                v-model="dateVal1"
                class="myPicker"
                type="date"            
                :endDate="endDate1"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="dateConfirm('1')">
            </mt-datetime-picker>
            <mt-datetime-picker
                lockScroll="true"
                ref="datePicker2"
                v-model="dateVal2"
                class="myPicker"
                type="date"
                :startDate="startDate2"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="dateConfirm('2')">
            </mt-datetime-picker>
        </div>
        <el-switch
        style="display: block"
        v-model="value4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="on"
        inactive-text="off">
        </el-switch>
          <el-table
            :data="tableData3"
            style="width: 100%"
            height="300">
            <el-table-column
            fixed
            prop="name"
            label="姓名"
            style="width: 25%"
            >
            </el-table-column>
            <el-table-column
            prop="num"
            label="次数"
            style="width: 25%">
            </el-table-column>
            <el-table-column
            prop="payNum"
            label="待支付"
            style="width: 25%">
            </el-table-column>
            <el-table-column
            label="操作"
            style="width: 150px">
            <el-switch
            style="display: block"
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="on"
            inactive-text="off">
            </el-switch>
            </el-table-column> 
        </el-table>
    </div>
</template>
<script>
import { formatDate,formatDateMin } from '@/js/global.js'
export default {
    filters: {                    //时间转换
        formatDate(time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd');
        }
      },
    data(){
        return{
            formatDate:'',
            // startDate1:this.dateVal2,
            endDate1:this.dateVal2,
            startDate2:this.dateVal1,
            // endDate2:new Date(),
            dateVal1: new Date(),
            dateVal2: new Date(),
            startTime:'开始时间',
            endTime:'结束时间',
            selectedValue1: '',
            selectedValue2: '',
            tableData3: [{
                name:'李锦容',
                num: 1,
                payNum: 25,
                done: '',
            },
            {
                name:'李锦容',
                num: 2,
                payNum: 25,
                done: '',
            },
            {
                name:'李锦容',
                num: 3,
                payNum: 25,
                done: '',
            }, ],
            value4:''
        }
    },
    methods:{
        openPicker() {
        this.$refs['datePicker1'].open()
      },
      selectData (num) { // 打开时间选择器
            // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
            if(num==='1'){
                if (this.selectedValue1) {
                    this.dateVal1 = this.selectedValue1
                } else {
                    this.dateVal1= new Date()
                }
                this.$refs['datePicker1'].open()
            }
           if(num==='2'){
                if (this.selectedValue2) {
                this.dateVal2 = this.selectedValue2
            } else {
                this.dateVal2 = new Date()
            }
            this.$refs['datePicker2'].open()
            }  
        },
        dateConfirm (name) { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
            name==='1'?(this.selectedValue1 = formatDateMin(this.dateVal1),
            this.startDate2=this.dateVal1,
            this.startTime=''):
            (this.selectedValue2 = formatDateMin(this.dateVal2),
            this.endDate1=this.dateVal2,
            this.endTime='')
        },
    }
}
</script>

<style scoped>
.block{
    margin-left:-200px;
    margin-top: 10px;
}
.time-div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
}
/* .t-btn{
    position: absolute;
    left:12px;
} */
</style>
