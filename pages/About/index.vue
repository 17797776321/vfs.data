<template>
  <div class="page-about">
    <div class="banner_box">
      <div class="tit">我们一直在路上</div>
      <div class="des">在科技领域的探索一直从未停歇，在人工智能的研究上一直追求极致，致力于完美的用户体验和服务</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'About',
  data() {
    return {}
  }
}
</script>
<style lang="less">
.page-about{
  .banner_box{
    width: 1920px;
    height: 797px;
    background: url('../../assets/images/about.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    .tit{
      padding-top: 338px;
      font-size: 90px;
      color: #fefeff;
      line-height: 114px;
    }
    .des{
      padding-top: 28px;
      font-size: 20px;
      color: #fefeff;
      line-height: 42px;
    }
  }
}
</style>
