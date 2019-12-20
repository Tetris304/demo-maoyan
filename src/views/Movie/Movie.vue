<template>
    <div class="movie">
        <!-- 使用 下载app 组件 -->
        <maoyan-download v-show="dlState"></maoyan-download>
        <!-- 嵌套组件 -->
        <div class="top-bar">
            <div class="white-bg top-bar-bg">
                <div class="city-entry">
                    <span class="city-name">北京</span>
                    <i class="city-entry-arrow"></i>
                </div>
                <div class="switch-hot">
                    <router-link class="switch-item" tag="div" v-for="(item, index) in tabs" :key="index" :to="item.path" active-class="active">{{ item.name }}</router-link>
                </div>
                <div class="search-bar" :style="{backgroundImage:'url(' + searchPic + ')'}"></div>
            </div>
        </div>
        <router-view @change="changeDownloadStatue"></router-view>
    </div>
</template>

<script>
// 引入 下载app 组件
import maoyanDownload from 'components/maoyan-download'
// 引入图片
import search from '../../assets/search_btn.png'

export default {
    data () {
        return {
            tabs : [
                {
                    path : '/movie/hot-showing',
                    name : '正在热映'
                },
                {
                    path : '/movie/coming-soon',
                    name : '即将上映'
                }
            ],
            searchPic : search,
            // 下载组件状态判定
            dlState : true
        }
    },
    methods : {
        changeDownloadStatue (val) {
            // 将子组件传来的值赋给 this.dlState ，稍后进行元素显示隐藏的判定
            this.dlState = val
        }
    },
    // 注册组件
    components : {
        maoyanDownload
    },
}
</script>

<style lang="less" scoped>
// 引入一个 less 文件
@import '~style/index.less';

.movie {
    background-color: #fff;
    .top-bar {
        border-bottom: 1px solid #e6e6e6;
        height: 44px;
        .white-bg {
            background-color: #fff;
        }
        .top-bar-bg {
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            height: 43px;
            -webkit-box-pack: justify;
            justify-content: space-between;
        }
        .city-entry {
            padding-left: 15px;
            font-size: 15px;
            color: #666;
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            .city-name {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 70px;
                max-width: 19.2vw;
            }
            .city-entry-arrow {
                width: 0;
                height: 0;
                border: 4px solid #b0b0b0;
                border-left-color: transparent;
                border-right-color: transparent;
                border-bottom-color: transparent;
                display: inline-block;
                margin-left: 4px;
                margin-top: 5px;
            }
        }
        .switch-hot {
            display: -webkit-box;
            display: flex;
            height: 43px;
            line-height: 43px;
            position: relative;
            .switch-item {
                font-size: 15px;
                color: #666;
                width: 80px;
                width: 21.33333vw;
                text-align: center;
                margin: 0 12px;
                font-weight: 700;
            }
            .active {
                color: @red;
                border-bottom: 2px solid @red;
            }
        }
        .search-bar {
            width: .533333rem;
            height: 20px;
            background-repeat: no-repeat;
            background-size: 20px;
            padding: 10px 35px 10px 10px;
            background-position: 10px;
        }
    }
}
</style>