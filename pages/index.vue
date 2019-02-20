<template>
  <section class="page-home">
    <!-- 侧边导航 -->
    <my-sitebar></my-sitebar>
    <!-- 智慧数据 -->
    <div class="banner_box">
      <h2 class="cn">海量数据 引领未来</h2>
      <h3 class="en">Massive Data Leads the Future</h3>
      <div class="btn_group">
        <a href="javascript:void(0);" class="wisdom_data">智慧数据</a><a href="javascript:void(0);" class="contact_us">联系我们</a>
      </div>
    </div>
    <!-- 智慧服务 -->
    <div class="wisdom_service_box">
      <div class="width">
        <div class="circle_box">
          <a href="javascript:void(0);" class="pos1">大数据</a>
          <a href="javascript:void(0);" class="pos2">提高盈利</a>
          <a href="javascript:void(0);" class="pos3">吸引顾客</a>
          <a href="javascript:void(0);" class="pos4">消费数据</a>
          <a href="javascript:void(0);" class="pos5">人工智能</a>
          <h2 class="cente_text">智慧数据分析</h2>
        </div>
      </div>
    </div>
    <!-- 小微优势 -->
    <div class="advantage_box">
      <div class="width clearfix">
        <ul class="list fl">
          <li class="option_box clearfix" v-for="(item,index) in wisdomList" :key="index">
            <div class="img_box fl">
              <img :src="item.img" alt="">
            </div>
            <div class="text_box fl">
              <h2 class="tit">{{item.title}}</h2>
              <p class="des">{{item.des}}</p>
            </div>
          </li>
        </ul>
        <div class="banner_img_box fr">
          <img src="../assets/images/banner7.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mySitebar from '@/components/mySitebar/index.vue'

import icon1 from '@/assets/images/icon1.png'
import icon2 from '@/assets/images/icon2.png'
import icon3 from '@/assets/images/icon3.png'
import icon4 from '@/assets/images/icon4.png'
export default {
  name:'Home',
  components:{
    mySitebar
  },
  data() {
    return {
      wisdomList:[
        {
          img:icon1,
          title:'营销云',
          des:'全媒体整合多渠道广告触达,线上线下数据搜集实现场景化营销,唯一恪守贴牌定制合作模式,自主溢价模式利润高。'
        },
        {
          img:icon2,
          title:'数据管理DMP',
          des:'全媒体整合多渠道广告触达,释放数据价值，提升营销效果全面精确的人群管理安全、开放、专业。'
        },
        {
          img:icon3,
          title:'智子盒子',
          des:'人工智能营销管家，线上线下数据汇通融合，智慧零售零距离营销，打破线下实体营销困境。'
        },
        {
          img:icon4,
          title:'大数据解决方案',
          des:'广告转化预测模型和系统解决方案，广告投放CTR预测模型解决方案，数据标签化处理和资产变现解决方案，个性化推荐解决方案。'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.page-home{
  display: block;
  .banner_box{
    width: 1920px;
    height: 960px;
    background:url('../assets/images/banner1.png') no-repeat;
    background-size: 100% 100%;
    .cn{
      font-size: 48px;
      color: #fefeff;
      text-align: center;
      padding-top: 375px;
    }
    .en{
      font-size: 25px;
      color: #fefeff;
      text-align: center;
      line-height: 42px;
    }
    .btn_group{
      padding: 42px 0;
      text-align: center;
      a{
        display: inline-block;
        width: 140px;
        font-size: 15px;
        line-height: 40px;
        transition: all .3s;
        border-radius: 3px;
        &:hover{
          color: rgba(204,0,0);
          border: 1px solid rgba(204,0,0)
        }
      }
      .wisdom_data{
        color: #ffcc00;
        border: 1px solid #ffcc00;
        margin-right: 42px;
      }
      .contact_us{
        color: #ffffff;
        border: 1px solid #ffffff;
      }
    }
  }
  .wisdom_service_box{
    width: 1920px;
    height: 708px;
    padding-top: 252px;
    background:url('../assets/images/banner2.png') no-repeat;
    background-size: 100% 100%;
    .circle_box{
      width: 466px;
      height: 466px;
      background: url('../assets/images/circle1.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      margin: 0 auto ;
      a{
        display: block;
        width: 95px;
        height: 95px;
        background: url('../assets/images/circle2.png') no-repeat;
        font-size: 18px;
        color: #172027;
        text-align: center;
        line-height: 95px;
        position: absolute;
      }
      .pos1{
        left: 184px;
        top: -46px;
      }
      .pos2{
        left: -34px;
        top: 114px;
      }
      .pos3{
        left: 400px;
        top: 114px;
      }
      .pos4{
        left: 38px;
        top: 355px;
      }
      .pos5{
        left: 338px;
        top: 355px;
      }
      .cente_text{
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        padding-top: 208px;
        line-height: 54px;
      }
    }
  }
  .advantage_box{
    width: 1920px;
    height: 960px;
    background: url('../assets/images/banner3.png') no-repeat;
    background-size: 100% 100%;
    .list{
      padding-top: 76px;
      padding-left: 70px;
      .option_box{
        padding-top: 40px;
        .img_box{
          width: 60px;
          height: 60px;
          img{
            display: block;
            width: 100%;
          }
        }
        .text_box{
          padding-left: 30px;
          width: 662px;
          .tit{
            font-size: 28px;
            color: #172027;
            line-height: 62px;
          }
          .des{
            font-size: 14px;
            color: #172027;
            line-height: 26px;
          }
        }
      }
    }
    .banner_img_box{
      display: block;
      width: 282px;
      height: 200px;
      margin-top: 300px;
      img{
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
