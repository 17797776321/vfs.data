<template>
  <div class="my_nav" :class="{'bg':isShow}">
    <div class="width clearfix">
      <div class="logo_box fl">
        <img src="../../assets/images/logo.png"
             alt="小微数据">
      </div>
      <div class="nav_box fl">
        <a href="javascript:void(0);"
           class="option" @click="jump_page('/')">网站首页</a>
        <a href="javascript:void(0);"
           class="option" @click="jump_page('/Wisdom')">智慧数据</a>
        <a href="javascript:void(0);"
           class="option" @click="jump_page('/Solution')">解决方案</a>
        <a href="javascript:void(0);"
           class="option" @click="jump_page('/About')">关于我们</a>
      </div>
      <div class="phone_logo_box fr">
        <img class="phone_img" src="../../assets/images/phonelogo.png" alt="">
        <span class="phone_number">400-816-7772</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyNav',
  data () {
    return {
      isShow:false
    }
  },
  methods:{
    jump_page(path) {
      this.$router.push({path:path})
    },
    myNavBg(){
      if(document.documentElement.scrollTop > 0){
        this.isShow = true
      }
      window.addEventListener('scroll',()=>{
        if(document.documentElement.scrollTop > 0){
          this.isShow = true
        }else{
          this.isShow = false
        }
      },false)
    }
  },
  mounted() {
    this.myNavBg()
  }
}
</script>
<style lang="less">
.bg{
  background-color: rgba(0,0,0,0.75) !important;
}
.my_nav {
  width: 1920px;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  z-index: 999;
  transition: background-color .5s;
  .logo_box {
    padding: 18px 55px;
    img {
      display: block;
    }
  }
  .nav_box{
    margin-left: 145px;
    padding: 18px 0;
    .option{
      display: inline-block;
      width: 116px;
      font-size: 16px;
      color: #b5b5b5;
      line-height: 48px;
      text-align: center;
      &:hover{
        color: #ffffff;
      }
    }
  }
  .phone_logo_box{
    padding: 18px 20px;
    .phone_img{
      display:inline-block;
      padding: 10px 0;
      vertical-align: middle;
    }
    .phone_number{
      display: inline-block;
      font-size: 20px;
      color: #fefeff;
      vertical-align: middle;
      padding-left: 20px;
    }
  }
}
</style>
