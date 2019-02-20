<template>
  <div class="sitebar">
    <ul class="list">
      <li class="option active"><a href="javascript:void(0);">智慧数据</a></li>
      <li class="option"><a href="javascript:void(0);">智慧服务</a></li>
      <li class="option"><a href="javascript:void(0);">小微优势</a></li>
      <li class="option"><a href="javascript:void(0);">关于我们</a></li>
      <li class="option"><a href="javascript:void(0);">联系我们</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less">
.sitebar {
  position: fixed;
  right: 80px;
  top: 426px;
  .list {
    .option {
      font-size: 14px;
      a {
        display: block;
        width: 94px;
        color: #b5b5b5;
        text-align: center;
        line-height: 44px;
        &:hover {
          color: #999999;
        }
      }
    }
    .active{
      position: relative;
      &::after{
        content:'';
        display: block;
        width: 75%;
        height: 2px;
        background-color: #999999;
        position: absolute;
        left: 13px;
        bottom: 0;
        z-index: 999;
      }
    }
  }
}
</style>
