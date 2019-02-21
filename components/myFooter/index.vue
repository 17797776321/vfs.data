<template>
  <div class="my-footer">
    <h2 class="header">联系我们 · Contact</h2>
    <div class="width options_box">
      <a href="javascript:void(0);" class="mr">
        <div class="img_box bg1"></div>
        <div class="tit">地址</div>
        <a href="javascript:void(0);" class="des">河南省郑州市郑东新区东风南路绿地之窗景峰座5022</a>
      </a>
      <a href="javascript:void(0);" class="mr">
        <div class="img_box bg2"></div>
        <div class="tit">电话</div>
        <a href="javascript:void(0);" class="des">400-816-7772</a>
      </a>
      <a href="javascript:void(0);" class="mr">
        <div class="img_box bg3"></div>
        <div class="tit">邮箱</div>
        <a href="javascript:void(0);" class="des">66378@qq.com</a>
      </a>
      <a href="javascript:void(0);">
        <div class="img_box bg4"></div>
        <div class="tit">网址</div>
        <a href="http:\\www.vfengs.com/About/index.html" target="blank" class="des">www.vfengs.com/About/index.html</a>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>
<style lang="less">
.my-footer{
  width: 1920px;
  height: 450px;
  background: url('../../assets/images/banner6.png') no-repeat;
  background-size: 100% 100%;
  .header{
    padding-top: 56px;
    color: #ffffff;
    text-align: center;
    line-height: 60px;
  }
  .options_box{
    padding-top: 100px;
    text-align: center;
    a{
      display: inline-block;
      width: 212px;
      vertical-align: top;
      .img_box{
        width: 80px;
        height: 66px;
        margin: 0 auto;
      }
      .bg1{
        background: url('../../assets/images/foot1.png') no-repeat;
        background-position: center center;
      }
      .bg2{
        background: url('../../assets/images/foot2.png') no-repeat;
        background-position: center center;
      }
      .bg3{
        background: url('../../assets/images/foot3.png') no-repeat;
        background-position: center center;
      }
      .bg4{
        background: url('../../assets/images/foot4.png') no-repeat;
        background-position: center center;
      }
      .tit{
        font-size: 18px;
        color: #006fe4;
        line-height: 50px;
        padding-top: 10px;
      }
      .des{
        display: block;
        font-size: 15px;
        color: #6f6e6a;
        line-height: 32px;
        &:hover{
          color: #ffffff;
        }
      }
    }
    .mr{
      margin-right: 66px;
    }
  }
}
</style>

