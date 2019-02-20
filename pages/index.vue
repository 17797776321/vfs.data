<template>
  <section class="page-home">
    <!-- 侧边导航 -->
    <my-sitebar></my-sitebar>
    <div class="banner_box">首页</div>
  </section>
</template>

<script>
import mySitebar from '@/components/mySitebar/index.vue'
export default {
  name:'Home',
  components:{
    mySitebar
  }
}
</script>

<style lang="less">
.page-home{
  .banner_box{
    width: 1920px;
    height: 959px;
    background:url('../assets/images/banner1.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>
