// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

import { MessageBox } from 'mint-ui';

Vue.prototype.$messageBox=MessageBox
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.prototype.$http = axios // 添加可全局使用axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
