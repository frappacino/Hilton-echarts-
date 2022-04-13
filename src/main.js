import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/global.less'

// 将全局echarts挂载到vue原型对象上
Vue.prototype.$echarts = window.echarts

// axios.defaults.baseURL = 'http://127.0.0.1:8999'
// 将axios挂载到vue原型对象上
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
