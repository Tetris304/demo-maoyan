<template>
    <div class="maoyan-header">
        <h1 class="nav-header">猫眼电影</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// 引入一个 less 文件
@import '~style/index.less';

.maoyan-header {
    height: 51.5px;
    color: #fff;
    background: @red;
    border-bottom: 1px solid @red;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    .nav-header {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        font-size: @fs-l;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
}
</style>
