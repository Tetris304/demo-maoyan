// 引入 Vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入组件
import Movie from 'views/Movie/Movie'
import HotShowing from 'views/Movie/HotShowing'
import ComingSoon from 'views/Movie/ComingSoon'
import Cinema from 'views/Cinema'
import My from 'views/My'

// 使用路由
Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
    mode : 'hash', // 默认为 hash 路由模式
    // 配置路由
    routes : [
        {
            path : '/movie', // / 表示根路径 所以此处不加 /
            component : Movie, // 要渲染的组件
            children : [
                {
                    path : 'hot-showing',
                    component : HotShowing
                },
                {
                    path : 'coming-soon',
                    component : ComingSoon
                },
                // 重定向
                {
                    path : '/',
                    redirect : 'hot-showing'
                }
            ]
        },
        {
            path : '/cinema',
            component : Cinema
        },
        {
            path : '/my',
            component : My
        },
        // 重定向
        {
            path : '/', // 如果路径仅为 / 后为空的情况下，设置展示的页面
            redirect : '/movie' // 第一次加载页面 期望展示给用户的界面
        }
    ]
})

// 导出路由对象
export default router
