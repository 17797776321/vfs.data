<template>
  <div class="layout">
    <my-nav></my-nav>
    <nuxt class="views_box"/>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myNav from '@/components/myNav/index.vue'
import myFooter from '@/components/myFooter/index.vue'
export default {
  name:'Layout',
  components:{
    myNav,
    myFooter
  },
  data() {
    return{
      msg:'导航'
    }
  }
}
</script>

<style lang="less">
.layout{
  .views_box{
  }
}
</style>
