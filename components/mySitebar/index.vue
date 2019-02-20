<template>
  <div class="sitebar">
    <ul class="list">
      <li class="option"><a href="javascript:void(0);">智慧数据</a></li>
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
      color: #999999;
      a {
        display: block;
        width: 94px;
        color: #999999;
        text-align: center;
        line-height: 44px;
        &:hover {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
