// 电影相关的接口处理

// 引入 axios 发送 ajax 请求模块
import axios from 'utils/axios.js'

// 获取电影数据的方法
export const getMovieData = () => {
    // 返回一个 Promise 对象
    return new Promise((resolve, reject) => {
        // 电影数据列表 api 借口
        const url = '/movies/ajax/movieOnInfoList?token=&optimus_uuid=01DAC0C01FB011EABD4EC93D72607542A2C25DB4403645C0A5ED6D89BBD66F24&optimus_risk_level=71&optimus_code=10'
        // 通过 axios 发送数据请求
        axios.get(url)
            .then((res) => { // 返回请求的配置信息
                // 请求成功得到数据
                resolve(res)
            })
            .catch((err) => {
                // 请求失败返回报错信息
                reject(err)
            })
    })
}
