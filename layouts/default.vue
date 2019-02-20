<template>
  <div class="layout">
    <my-nav></my-nav>
    <nuxt />
  </div>
</template>
<script>
import myNav from '@/components/myNav/index.vue'
export default {
  name:'Layout',
  components:{
    myNav
  },
  data() {
    return{
      msg:'导航'
    }
  }
}
</script>

<style lang="less">
</style>
