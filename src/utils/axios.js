// 引入 axios模块
import axios from 'axios'

/*
    * 请求拦截器    可以在使用 axios 发起请求之前，进行拦截，接收所有的请求参数，并进行修改
    * 响应拦截器    可以在使用 axios 接收数据前进行拦截，对接收的数据进行处理
*/

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // 发起请求前的操作
    // config.url = 'https://www.baidu.com'
    return config
}, function (error) {
    // 处理请求错误
    return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // 处理响应数据
    return response.data // 对数据先做一波过滤处理
}, function (error) {
    // 处理响应错误
    return Promise.reject(error)
})

// 导出 axios 模块
export default axios
