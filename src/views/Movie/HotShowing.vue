<template>
    <div class="hot-showing" ref="hot_showing">
        <div class="page-wrapper">
            <ul class="list-wrapper">
                <li class="item" v-for="(movieItem, index) in movieList" :key="index" ref="movieItem">
                    <div class="main-block">
                        <div class="avatar">
                            <img :src="movieItem.img">
                        </div>
                        <div class="content-wrapper">
                            <div class="column">
                                <div class="movie-title">
                                    <div class="title">{{ movieItem.nm }}</div>
                                    <span class="version" :class="movieItem.version"></span>
                                </div>
                                <div class="detail">
                                    <!-- 没有评分 -->
                                    <div v-if="!movieItem.sc && movieItem.globalReleased" class="no-score">暂无评分</div>
                                    <!-- 评分 -->
                                    <div v-if="movieItem.sc" class="score">
                                        <span class="score-suffix">点映评 </span>
                                        <span class="grade">{{ movieItem.sc }}</span>
                                    </div>
                                    <!-- 谁想看 -->
                                    <div v-if="!movieItem.globalReleased" class="want-see">
                                        <span class="person">{{ movieItem.wish }}</span>
                                        <span class="p-suffix">人想看</span>
                                    </div>
                                    <div class="actor">主演:{{ movieItem.star }}</div>
                                    <div class="show-info">{{ movieItem.showInfo }}</div>
                                </div>
                            </div>
                            <div class="button-block">
                                <div class="btn" :class='movieItem.globalReleased ? "" : "pre"'>
                                    <span class="fix" ref="fix"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// 引入请求数据的方法
import { getMovieData } from 'api/movie.js'
// 引入 better-scroll 滚动层插件
import BS from 'better-scroll'
// 引入节流优化组件
import { _debounce } from "utils/optimize.js";

export default {
    data () {
        return {
            movieList : '', // 电影数据列表
            downloadToggle : true, // 下载组件的显示状态
        }
    },
    methods : {
        // 对请求来的电影数据做修改
        modifyMovieData (list) {
            list.map((item, index) => {
                // 图片 url 处理
                item.img = item.img.replace('w.h', '128.180')
                // 电影评分处理
                if (item.sc === 0.0) {
                    item.sc = 0
                } else {
                    item.sc = ((item.sc * 10) / 10).toFixed(1)
                }
            })
            return list
        },
        // 改变下载组件状态值
        changeDownloadStatue () {
            this.$emit('change', this.downloadToggle)
        },
        // 初始化滚动层功能
        initShowingBS () {
            this.bs = new BS('.hot-showing', {
                // 开启鼠标滚轮
                mouseWheel : {
                    speed : 20, // 鼠标滚轮滚动的速度
                    invert : false, // 为 true 表示滚轮滚动和时机滚动方向相反
                    easeTime : 300 // 滚动动画的缓动时长
                },
                click : true,
                top : true,
                probeType : 3 // 实时派发 scroll 事件，得到滚动位置
            })
            // 添加滚动监听
            _debounce (this.bs.on('scroll', (pos) => { // pos 位置信息
                let scrollY = Math.abs(pos.y) // 获取 y轴 正值，待会进行比对
                // 获取第一条电影元素的高度
                let movieItemHeight = this.$refs.movieItem[0].offsetHeight
                // 函数的节流  在间隔时间之内，只允许执行一次函数
                    if (scrollY > movieItemHeight && pos.y < movieItemHeight) {
                        this.downloadToggle = false
                        this.$refs.hot_showing.style.top = '95px'
                        this.changeDownloadStatue()
                    } else if (scrollY < movieItemHeight) {
                        this.downloadToggle = true
                        this.$refs.hot_showing.style.top = '161px'
                        this.changeDownloadStatue()
                    }
            }), 200)
        },
        // 判断传入内容是 购票 还是 预售
        buyOrPresell (data) {
            for (let i = 0; i < data.length; i ++) {
                if (data[i].globalReleased) {
                    this.$refs.fix[i].innerText = '购票'
                } else {
                    this.$refs.fix[i].innerText = '预售'
                }
            }
        }
    },
    // 数据发生更新后
    updated () {
        // 调用 购票 预售 显示功能
        this.$nextTick(() => {
            this.buyOrPresell(this.movieList)
        })
    },
    // 创建结束生命周期
    created () {
        // 在创建后生命周期中发送 ajax 请求
        // 调用请求电影数据
        getMovieData()
            .then((res) => {
                this.movieList = this.modifyMovieData(res.movieList)
            })
    },
    // 挂载结束生命周期
    mounted () {
        // 调用滚动层功能
        this.initShowingBS()
    },
}
</script>

<style lang="less" scoped>
// 引入一个 less 文件
@import '~style/index.less';

.hot-showing {
    position: fixed;
    overflow: hidden;
    top: 161px;
    bottom: 48px;
    left: 0;
    right: 0;
    .list-wrapper {
        padding-right: .453333rem;
        background-color: #fff;
        .item {
            padding-left: 15px;
            background-color: #fff;
            .main-block {
                position: relative;
                width: 100%;
                .avatar {
                    width: 1.706667rem;
                    height: 90px;
                    position: relative;
                    margin-top: 12px;
                    float: left;
                    img {
                        width: 100%;
                        height: 100%
                    }
                }
                .content-wrapper {
                    padding: 12px 14px 12px 0;
                    margin-left: 74px;
                    height: 114px;
                    max-height: 114px;
                    position: relative;
                    border-bottom: 1px solid #e6e6e6;
                    .column {
                        padding-right: 5px;
                        margin-right: 48px;
                        overflow: hidden;
                        padding-bottom: 10px;
                        .movie-title {
                            max-height: 24px;
                            margin-bottom: 7px;
                            line-height: 24px;
                            overflow: hidden;
                            .title {
                                display: inline-block;
                                font-size: 17px;
                                max-width: 4.16rem;
                                color: #333;
                                font-weight: 700;
                                padding-right: 5px;
                                flex-shrink: 1;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }
                            .version {
                                display: inline-block;
                                background-size: contain;
                                background-repeat: no-repeat;
                                height: 18px;
                                width: .453333rem;
                                display: inline-block;
                                margin-top: 5px;
                                -webkit-box-flex: 0;
                                flex: 0 0 auto;
                                margin-right: 3px;
                                &.v2d.imax {
                                    width: 43px;
                                    .background-image('2d_imax')
                                }
                                &.v3d.imax {
                                    width: 43px;
                                    .background-image('3d_imax')
                                }
                            }
                        }
                        .detail {
                            box-sizing: border-box;
                            line-height: 1;
                            overflow: hidden;
                            .no-score {
                                font-size: 12px;
                                color: #666;
                            }
                            .actor {
                                .no-wrap();
                            }
                            .show-info {
                                .no-wrap();
                            }
                            div + div {
                                margin-top: 6px;
                                line-height: 15px;
                            }
                            .actor, .score, .show-date, .show-info {
                                font-size: 13px;
                                color: #666;
                            }
                            .want-see {
                                .no-wrap();
                                font-size: 13px;
                                .person {
                                    color: #faaf00;
                                    font-size: 15px;
                                    font-weight: 600;
                                }
                                .p-suffix {
                                    font-size: 13px;
                                    margin-left: 1px;
                                    display: inline-block;
                                    color: #666;
                                }
                            }
                            .score {
                                .no-wrap();
                                .grade {
                                    font-weight: 700;
                                    color: #faaf00;
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }
            }
            .button-block {
                font-size: 12px;
                position: absolute;
                right: 14px;
                top: 0;
                bottom: 0;
                height: 27px;
                margin: auto;
                .btn {
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;
                    cursor: pointer;
                    &.pre {
                        background-color: #3c9fe6;
                    }
                }
            }
        }
    }
}
</style>
