<template>
  <section class="container">
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

<style>
</style>
