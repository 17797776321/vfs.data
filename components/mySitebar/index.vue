<template>
  <div class="sitebar">
    <ul class="list">
      <li class="option" :class="{'active':scrollTop>=0 && scrollTop<960}"><a href="javascript:void(0);" @click="jumpPos('banner_box')">智慧数据</a></li>
      <li class="option" :class="{'active':scrollTop>=960 && scrollTop<2870}"><a href="javascript:void(0);" @click="jumpPos('wisdom_service_box')">智慧服务</a></li>
      <li class="option" :class="{'active':scrollTop>=2870 && scrollTop<3950}"><a href="javascript:void(0);" @click="jumpPos('advantage_box')">小微优势</a></li>
      <li class="option" :class="{'active':scrollTop>=3950 && scrollTop<4007}"><a href="javascript:void(0);" @click="jumpPos('about_box')">关于我们</a></li>
      <li class="option" :class="{'active':scrollTop>=4007}"><a href="javascript:void(0);" @click="jumpPos('my-footer')">联系我们</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    scrollTop:{
      type:Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  methods:{
    jumpPos(boxName){
      this.$emit('pagePos',boxName)
    }
  },
  mounted() {
    window.addEventListener('scroll',()=>{
      console.log(this.scrollTop)
    },false)
  }
}
</script>
<style lang="less">
.sitebar {
  position: fixed;
  right: 80px;
  top: 426px;
  z-index: 99;
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
      a{
        color: #999999;
      }
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
