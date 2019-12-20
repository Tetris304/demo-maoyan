<template>
    <div class="maoyan-download">
        <a class="download-header" href="http://m.maoyan.com/app?channel=mymovie1yuan-dy">
            <div class="download-app-bar">
                <img class="logo" :src="downloadLogo" alt="">
                <div class="app-name-desc">
                    <div class="app-name">猫眼</div>
                    <div class="app-desc">在线选座，热门影讯，爱上看电影</div>
                </div>
                <div class="btn-open-app">立即打开</div>
            </div>
        </a>
    </div>
</template>

<script>
/*
图片的使用方式
1. 直接写路径
    如果是 public 目录下的图片，那么直接使用根路径 /
    其他目录的图片使用相对路径
2. 声明变量使用
    public 路径下的变量可以是根路径
    其他目录下的图片，想用变量表达，需要用 import 加载图片
 */
import logo from '../assets/logo.png'

export default {
    data () {
        return {
            downloadLogo : logo
        }
    },
}
</script>

<style lang="less" scoped>
// 引入一个 less 文件
@import '~style/index.less';

.download-header {
    display: block;
    .download-app-bar {
        position: relative;
        height: 64px;
        background-color: #fff;
        border-bottom: 1px solid #e6e6e6;
        .logo {
            position: absolute;
            left: 15px;
            top: 11px;
            width: 1.173333rem;
            height: 44px;
        }
        .app-name-desc {
            position: absolute;
            left: 66px;
            top: 13px;
            .app-name {
                font-size: 17px;
                color: #222;
                line-height: 23px;
            }
            .app-desc {
                font-size: @fs-xs;
                color: #999;
                line-height: 16px;
            }
        }
        .btn-open-app {
            position: absolute;
            right: 15px;
            top: 17px;
            width: 1.813333rem;
            line-height: 30px;
            text-align: center;
            background: @red;
            border-radius: 3px;
            font-size: 13px;
            color: #fff;
        }
    }
}
</style>
