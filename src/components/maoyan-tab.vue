<template>
    <div class="maoyan-tab">
        <router-link class="tab-item" v-for="(item, index) in tabs" :key="index" :to="item.path" active-class="current" tag="div">
            <span class="item-icon">
                <i :class="item.iconClass" aria-hidden="true"></i>
            </span>
            <span class="item-text">{{ item.name }}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabs : [
                {
                    name : '电影',
                    path : '/movie',
                    iconClass : 'fa fa-film'
                },
                {
                    name : '影院',
                    path : '/cinema',
                    iconClass : 'fa fa-toggle-right'
                },
                {
                    name : '我的',
                    path : '/my',
                    iconClass : 'fa fa-user-o'
                }
            ]
        }
    },
}
</script>

<style lang="less" scoped>
// 引入一个 less 文件
@import '../style/index.less';

.maoyan-tab {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: .5px solid #d8d8d8;
    display: -webkit-box;
    display: flex;
    justify-content: space-around;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .tab-item {
        float: left;
        width: .666667rem;
        height: 48px;
        line-height: 48px;
        box-sizing: border-box;
        color: #f03d37;
        position: relative;
        text-align: center;
        -webkit-box-flex: 1;
        flex: 1;
        .item-icon {
            i {
                display: block;
                width: 25px;
                height: 25px;
                margin: 5px auto;
                font-size: 22px;
                color: #696969;
            }
        }
        .item-text {
            line-height: 12px;
            position: absolute;
            top: 33px;
            left: 0;
            right: 0;
            font-size: 10px;
            color: #696969;
        }
    }
    .current {
        .item-icon {
            i {
                color: @red;
            }
        }
        .item-text {
            color: @red;
        }
    }
}
</style>
