<template>
    <div id="app">
        <!-- 头部组件 -->
        <maoyan-header></maoyan-header>
        <!-- Tab 组件 -->
        <maoyan-tab></maoyan-tab>
        <!-- 路由组件 -->
        <router-view></router-view>
    </div>
</template>

<script>
// 引入头部组件
import maoyanHeader from 'components/maoyan-header'
// 引入底部切换 Tab 组件
import maoyanTab from 'components/maoyan-tab'

export default {
    // 注册组件
    components : {
        maoyanHeader,
        maoyanTab
    }
}
</script>

<style lang="less" scoped>
// 引入一个 less 文件
@import '~style/index.less';

</style>
