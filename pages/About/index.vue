<template>
  <div class="page-about">
    <div class="banner_box">
      <div style="padding-top: 338px;">
        <div class="tit myhidden" ref="banner_box_tit">我们一直在路上</div>
        <div class="des myhidden" ref="banner_box_des">在科技领域的探索一直从未停歇，在人工智能的研究上一直追求极致，致力于完美的用户体验和服务</div>
      </div>
    </div>
    <div class="content_box" ref="content_box">
      <div class="width">
        <div class="box1 myhidden" ref="box1"></div>
        <div class="box2 myhidden" ref="box2">
          <h2 class="tit">河南微风尚科技有限公司</h2>
          <p class="des">河南微风尚科技是一家专业的大数据分析服务公司，大数据分析行业开拓者，为客户提供深度用户行为分析平台、以及专业的咨询服务和行业解决方案，致力于帮助客户实现数据驱动。通过用户精准分群、灵活创建并管理营销活动计划，一键执行计划触达用户，并实时分析活动效果，真正形成自动化、精细化的运营闭环。小微数据立足大数据及用户行为分析的技术与实践前沿，业务现已覆盖以互联网、金融、零售快消、高科技、旅游等为代表的十多个主要行业、并可支持企业多个职能部门。</p>
          <p class="des">我们的客户来自各行各业，为了共同目标，我们在工作上密切配合，从创业型小企业到知名品牌，感谢他们对我们的高要求从不同领域给我们带来的挑战，让我们激情的团队有机会用头脑与智慧不断的给客户带来惊喜。</p>
          <p class="des">在我国大数据基础建设蓬勃发展的时代，小微数据将更积极、创新地加入企业基础数据源建设、互联网+创新业务发展、大数据技术的深化应用，与各行业领先企业一起构建可持续竞争力，为客户带来价值、重构中国互联网数据根基。</p>
        </div>
      </div>
    </div>
    <div class="curve_box">
      <div class="width list">
        <a href="javascript:void(0);" v-for="(item,index) in curveList" :key="index">
          <h2 class="tit">{{item.tit}}</h2>
          <p class="des">{{item.des}}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { ScrollAnimate } from '@/utils/animate.js'
export default {
  name: 'About',
  data () {
    return {
      curveList:[
        {tit:'10 +',des:'年互联网品牌建站经验'},
        {tit:'10 +',des:'公司团队员工'},
        {tit:'600 +',des:'知名企业服务经验'},
        {tit:'6 +',des:'行业标准解决方案'}
      ]
    }
  },
  methods:{
    
  },
  mounted() {
    new ScrollAnimate(this.$refs.banner_box_tit,'fadeInUp',0)
    new ScrollAnimate(this.$refs.banner_box_des,'fadeInUp',0)

    let content_box = this.$refs.content_box.offsetTop
    new ScrollAnimate(this.$refs.box1,'fadeInLeft',content_box)
    new ScrollAnimate(this.$refs.box2,'fadeInRight',content_box)
  }
}
</script>
<style lang="less">
.page-about {
  .banner_box {
    width: 1920px;
    height: 797px;
    background: url("../../assets/images/about.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    .tit {
      font-size: 90px;
      color: #fefeff;
      line-height: 114px;
    }
    .des {
      padding-top: 28px;
      font-size: 20px;
      color: #fefeff;
      line-height: 42px;
    }
  }
  .content_box {
    width: 1920px;
    padding-top: 180px;
    padding-bottom: 360px;
    background-color: #f5f5f7;
    position: relative;
    .box1 {
      width: 641px;
      height: 385px;
      background: url("../../assets/images/aboutbanner.png") no-repeat;
      background-size: 100% 100%;
    }
    .box2 {
      width: 722px;
      height: 622px;
      background-color: #ffffff;
      position: absolute;
      right: 360px;
      top: 220px;
      .tit{
        padding: 66px 62px 38px 92px;
        font-size: 22px;
        line-height: 42px;
        color: #0f78e6;
        position: relative;
        &::after{
          content:'';
          display: block;
          width: 36px;
          height: 4px;
          background-color: #006FE4;
          position: absolute;
          bottom: 20px;
        }
      }
      .des{
        padding: 0 62px 0 92px;
        font-size: 14px;
        color: #83868f;
        line-height: 36px;
        text-indent: 28px;
      }
    }
  }
  .curve_box{
    width: 1920px;
    height: 492px;
    background: url('../../assets/images/curve.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    .list{
      padding-top: 116px;
      a{
        display: inline-block;
        width: 300px;
        color: #ffffff;
        .tit{
          font-size: 72px;
          line-height: 96px;
        }
        .des{
          font-size: 16px;
          line-height: 46px;
        }
      }
    }
  }
}
</style>
