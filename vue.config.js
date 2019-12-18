// 引入操作路径模块
const path = require('path')

// 封装一个获取路径的方法
function AP (dir) {
    return path.join(__dirname, dir)
}

// vue cli 配置
module.exports = {
    // webpack-dev-server 相关配置
    devServer : {
        proxy : { // 配置多个代理
            'api' : {
                target : 'http://ustbhuangyi.com', // 要跨域的域名(接口根路径)
                // ws : true, // 如果要代理 webSockets，配置这个参数
                secure : false, // 如果是https接口，需要配置这个参数
                changeOrigin : true, // 是否开启跨域
                pathRewrite : { // 重定向某一个 路径
                    '^/api' : ''
                }
            }
        }
    },
    chainWebpack : (config) => {
        config.resolve.alias // 通过链式调用，表示给某一文件夹起别名
            .set('style', AP('./src/style')) // 设置别名
            .set('views', AP('./src/views'))
            .set('components', AP('./src/components'))
            .set('utils', AP('./src/utils'))
            .set('api', AP('./src/api'))
    }
}
