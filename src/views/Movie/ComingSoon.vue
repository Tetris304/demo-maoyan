<template>
    <div class="coming-soon">
        <div class="page-wrapper">
            <div class="list-wrapper">
                <div class="most-expected">
                    <p class="title">近期最受期待</p>
                    <ul class="most-expected-list">
                        <li class="expected-item">
                            <div class="poster">
                                <img src="https://p0.meituan.net/170.230/movie/120f2e1e6b0a67449e31107a598c5c911203737.jpg" alt="">
                                <span class="wish-bg"></span>
                                <span class="wish">
                                    <span class="wish-num"></span>人想看
                                </span>
                                <div class="toggle-wish"></div>
                            </div>
                            <h5 class="name"></h5>
                            <p class="date"></p>
                        </li>
                    </ul>
                </div>
                <div class="coming-list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// 引入一个 less 文件
@import '~style/index.less';

.coming-soon {
    position: fixed;
    overflow: hidden;
    top: 161px;
    bottom: 48px;
    left: 0;
    right: 0;
    .list-wrapper {
        padding-right: .453333rem;
        background-color: #fff;
        .most-expected {
            padding: 12px 0 12px 15px;
            background-color: #fff;
            margin-bottom: 10px;
            .title {
                margin: 0;
                font-size: 14px;
                line-height: 19px;
                color: #333;
                margin-bottom: 12px;
            }
            .most-expected-list {
                overflow: scroll;
                white-space: nowrap;
                .expected-item {
                    display: inline-block;
                    width: 2.266667rem;
                    overflow: hidden;
                    margin-right: 10px;
                    .poster {
                        width: 2.266667rem;
                        height: 115px;
                        position: relative;
                        margin-bottom: 6px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        .wish-bg {
                            display: inline-block;
                            width: 100%;
                            height: 35px;
                            position: absolute;
                            bottom: 0;
                            background-image: -webkit-linear-gradient(top,rgba(77,77,77,0),#000);
                            background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
                        }
                        .wish {
                            position: absolute;
                            left: 4px;
                            bottom: 2px;
                            color: #faaf00;
                            font-size: 11px;
                            font-weight: 600;
                        }
                        .toggle-wish {
                            width: .746667rem;
                            line-height: 28px;
                            background: rgba(61,63,71,.6);
                            text-align: center;
                            border-bottom-right-radius: 10px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            span {
                                display: inline-block;
                                width: .266667rem;
                                height: 10px;
                                background-size: 100%;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                    .name {
                        margin: 0;
                        font-size: 13px;
                        color: #222;
                        margin-bottom: 3px;
                        .no-wrap();
                    }
                    .date {
                        margin: 0;
                        font-size: @fs-xs;
                        color: #999;
                    }
                }
            }
        }
        .coming-list {
            background-color: #fff;
        }
    }
}
</style>
