<template>
  <div class="layout">
    <my-nav></my-nav>
    <transition name="fade">
      <nuxt class="views_box"/>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.layout{
  .views_box{
  }
}
</style>
