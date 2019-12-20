// 引入 Vue
import Vue from 'vue'
// 引入名为 App 的 Vue 组件
import App from './App.vue'
// 实例中注册路由
import router from './router'

// 引入 axios 发送 ajax 请求模块
import axios from 'utils/axios.js'
// 引入 font-awesome 字体库
import 'font-awesome/scss/font-awesome.scss'
// 引入清除默认样式
import 'style/reset.css'

Vue.config.productionTip = false
// 将 axios 请求模块挂载到 Vue 原型上
Vue.prototype.$axios = axios

new Vue({
    // 注册到 Vue 的实例中
    router, // 键值名相同省略写法
    // 渲染 App 组件
    render : h => h(App)
}).$mount('#app') // 挂载到 App 元素上
