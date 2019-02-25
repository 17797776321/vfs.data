<template>
  <section class="page-home">
    <!-- 侧边导航 -->
    <my-sitebar :scroll-top="scrollTop" @pagePos="pagePos"></my-sitebar>
    <!-- 智慧数据 -->
    <div class="banner_box">
      <div style="padding-top:375px">
        <h2 class="cn myhidden"
            ref="cn">海量数据 引领未来</h2>
      </div>

      <h3 class="en"
          ref="en">Massive Data Leads the Future</h3>
      <div class="btn_group">
        <a href="javascript:void(0);"
           class="wisdom_data">智慧数据</a><a href="javascript:void(0);"
           class="contact_us">联系我们</a>
      </div>
    </div>
    <!-- 智慧服务 -->
    <div class="wisdom_service_box">
      <div class="width">
        <div class="circle_box">
          <a href="javascript:void(0);"
             ref="circle1"
             class="pos1 myhidden">大数据</a>
          <a href="javascript:void(0);"
             class="pos2 myhidden"
             ref="circle2">提高盈利</a>
          <a href="javascript:void(0);"
             class="pos3 myhidden"
             ref="circle3">吸引顾客</a>
          <a href="javascript:void(0);"
             class="pos4 myhidden"
             ref="circle4">消费数据</a>
          <a href="javascript:void(0);"
             class="pos5 myhidden"
             ref="circle5">人工智能</a>
          <h2 class="cente_text myhidden" ref="circleText">智慧数据分析</h2>
        </div>
      </div>
    </div>
    <!-- 小微优势 -->
    <div class="advantage_box">
      <div class="width clearfix">
        <ul class="list fl">
          <li class="option_box clearfix"
              v-for="(item,index) in wisdomList"
              :key="index">
            <div class="img_box fl">
              <img :src="item.img"
                   alt="">
            </div>
            <div class="text_box fl myhidden" :ref="item.name">
              <h2 class="tit">{{item.title}}</h2>
              <p class="des">{{item.des}}</p>
            </div>
          </li>
        </ul>
        <div class="banner_img_box fr">
          <img src="../assets/images/banner7.png"
               alt="">
        </div>
      </div>
    </div>
    <!-- project -->
    <div class="project_box">
      <div class="width">
        <div class="header">
          <h2 class="tit">我们的优势</h2>
          <p class="des">小微数据提供从采集、建模、存储、分析、智能应用</p>
          <p class="des">的全流程数据驱动解决方案，帮助企业驱动业务决策和产品智能。</p>
        </div>
        <div class="main">
          <a href="javascript:void(0);"
             class="option_box myhidden"
             :class="[index === 2?'':'mr']"
             v-for="(item,index) in projectList"
             :ref="item.name"
             :key="index">
            <div class="option_header">
              <!-- <span class="iconfont icon-xitong2"></span> -->
              <img :src="item.img"
                   alt="">
              <h2>{{item.title}}</h2>
            </div>
            <div class="option_main">
              <div class="text_des">{{item.des}}</div>
              <h2 v-for="(option,n) in item.options"
                  :key="n">{{option}}</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about_box" ref="about_box">
      <div class="width">
        <div class="header">
          关于我们 · About
        </div>
        <div class="box1 myhidden" ref="about_img">
          <img src="../assets/images/box1.png"
               alt="">
        </div>
        <div class="box2 myhidden" ref="about_content">
          <h2 class="tit">河南微风尚科技有限公司</h2>
          <p class="des">我们的客户来自各行各业，为了共同目标，我们在工作上密切配合，从创业型小企业到知名品牌，感谢他们对我们的高要求从不同领域给我们带来的挑战，让我们激情的团队有机会用头脑与智慧不断的给客户带来惊喜。</p>
          <div class="more">
            <a href="javascript:void(0);">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ScrollAnimate } from '@/utils/animate.js'
import mySitebar from '@/components/mySitebar/index.vue'

import icon1 from '@/assets/images/icon1.png'
import icon2 from '@/assets/images/icon2.png'
import icon3 from '@/assets/images/icon3.png'
import icon4 from '@/assets/images/icon4.png'

import pro1 from '@/assets/images/pro1.png'
import proac1 from '@/assets/images/proac1.png'
import pro2 from '@/assets/images/pro2.png'
import proac2 from '@/assets/images/proac2.png'
import pro3 from '@/assets/images/pro3.png'
import proac3 from '@/assets/images/proac3.png'
export default {
  name: 'Home',
  components: {
    mySitebar
  },
  data () {
    return {
      scrollTop: 0,
      wisdomList: [
        {
          img: icon1,
          title: '营销云',
          des: '全媒体整合多渠道广告触达,线上线下数据搜集实现场景化营销,唯一恪守贴牌定制合作模式,自主溢价模式利润高。',
          name:'advantage1'
        },
        {
          img: icon2,
          title: '数据管理DMP',
          des: '全媒体整合多渠道广告触达,释放数据价值，提升营销效果全面精确的人群管理安全、开放、专业。',
          name:'advantage2'
        },
        {
          img: icon3,
          title: '智子盒子',
          des: '人工智能营销管家，线上线下数据汇通融合，智慧零售零距离营销，打破线下实体营销困境。',
          name:'advantage3'
        },
        {
          img: icon4,
          title: '大数据解决方案',
          des: '广告转化预测模型和系统解决方案，广告投放CTR预测模型解决方案，数据标签化处理和资产变现解决方案，个性化推荐解决方案。',
          name:'advantage4'
        }
      ],
      projectList: [
        {
          img: pro1,
          acimg: proac1,
          title: '数据管理',
          des: '基于云计算，为企业提供数据收集、抓取、集成、处理等定制化服务，制定一体化数据管理解决方案',
          options: ['大数据云平台的搭建', '数据集成', '数据采集'],
          name:'project1'
        },
        {
          img: pro2,
          acimg: proac2,
          title: '数据分析',
          des: '深入理解企业业务逻辑，为企业提供定制化的数据收集、清洗、建模、分析、可视化等服务。',
          options: ['数据建模服务', '算法支撑服务', '数据可视化服务'],
          name:'project2'
        },
        {
          img: pro3,
          acimg: proac3,
          title: '系统定制开发',
          des: '完善企业业务流程系统，建立销售平台、客户关系管理、风险防范等互联网弹性架构，实现多维度后台实时查询和监测。',
          options: ['CRM系统', '金融业务系统'],
          name:'project3'
        },
      ]
    }
  },
  methods:{
    pageScroll() {
      window.addEventListener('scroll',()=>{
        this.scrollTop = document.documentElement.scrollTop;
      },false)
    },
    pagePos(boxName) {
      this.$scrollTo(`.${boxName}`,'1s')
    }
  },
  mounted () {
    /* 监听滚动 */
    this.pageScroll()
    /* 首页banner图标题 */
    new ScrollAnimate(this.$refs.cn,'fadeInUp',0)
    new ScrollAnimate(this.$refs.en,'fadeInUp',0)
    // /* 智慧数据动画 */
    new ScrollAnimate(this.$refs.circle1,'fadeInUp',0)
    new ScrollAnimate(this.$refs.circle2,'fadeInUp',0)
    new ScrollAnimate(this.$refs.circle3,'fadeInUp',0)
    new ScrollAnimate(this.$refs.circle4,'fadeInUp',0)
    new ScrollAnimate(this.$refs.circle5,'fadeInUp',0)
    new ScrollAnimate(this.$refs.circleText,'fadeInUp',0)

    /* 小微优势 */
    new ScrollAnimate(this.$refs.advantage1,'rotateInUpLeft',0,true)
    new ScrollAnimate(this.$refs.advantage2,'rotateInUpLeft',0,true)
    new ScrollAnimate(this.$refs.advantage3,'rotateInUpLeft',0,true)
    new ScrollAnimate(this.$refs.advantage4,'rotateInUpLeft',0,true)
  
    new ScrollAnimate(this.$refs.project1,'fadeInUp',0,true)
    new ScrollAnimate(this.$refs.project2,'fadeInUp',0,true)
    new ScrollAnimate(this.$refs.project3,'fadeInUp',0,true)

    // 获取 当前DOM所在父元素高度
    let aboutH = this.$refs.about_box.offsetTop;
    new ScrollAnimate(this.$refs.about_img,'fadeInLeft',aboutH)
    new ScrollAnimate(this.$refs.about_content,'fadeInRight',aboutH)
  }
}
</script>

<style lang="less">
.page-home {
  display: block;
  .banner_box {
    width: 1920px;
    height: 960px;
    background: url("../assets/images/banner1.png") no-repeat;
    background-size: 100% 100%;
    .cn {
      font-size: 48px;
      color: #fefeff;
      text-align: center;
    }
    .en {
      font-size: 25px;
      color: #fefeff;
      text-align: center;
      line-height: 42px;
    }
    .btn_group {
      padding: 42px 0;
      text-align: center;
      a {
        display: inline-block;
        width: 140px;
        font-size: 15px;
        line-height: 40px;
        transition: all 0.3s;
        border-radius: 3px;
        &:hover {
          color: rgba(204, 0, 0);
          border: 1px solid rgba(204, 0, 0);
        }
      }
      .wisdom_data {
        color: #ffcc00;
        border: 1px solid #ffcc00;
        margin-right: 42px;
      }
      .contact_us {
        color: #ffffff;
        border: 1px solid #ffffff;
      }
    }
  }
  .wisdom_service_box {
    width: 1920px;
    height: 708px;
    padding-top: 252px;
    background: url("../assets/images/banner2.png") no-repeat;
    background-size: 100% 100%;
    .circle_box {
      width: 466px;
      height: 466px;
      background: url("../assets/images/circle1.png") no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
      a {
        display: block;
        width: 95px;
        height: 95px;
        background: url("../assets/images/circle2.png") no-repeat;
        font-size: 18px;
        color: #172027;
        text-align: center;
        line-height: 95px;
        position: absolute;
      }
      .pos1 {
        margin-left: 184px;
        margin-top: -46px;
      }
      .pos2 {
        margin-left: -34px;
        margin-top: 114px;
      }
      .pos3 {
        margin-left: 400px;
        margin-top: 114px;
      }
      .pos4 {
        margin-left: 38px;
        margin-top: 355px;
      }
      .pos5 {
        margin-left: 338px;
        margin-top: 355px;
      }
      .cente_text {
        font-size: 30px;
        color: #ffffff;
        text-align: center;
        padding-top: 208px;
        line-height: 54px;
      }
    }
  }
  .advantage_box {
    width: 1920px;
    height: 960px;
    background: url("../assets/images/banner3.png") no-repeat;
    background-size: 100% 100%;
    .list {
      padding-top: 76px;
      padding-left: 70px;
      .option_box {
        padding-top: 40px;
        .img_box {
          width: 60px;
          height: 60px;
          img {
            display: block;
            width: 100%;
          }
        }
        .text_box {
          padding-left: 30px;
          width: 662px;
          .tit {
            font-size: 28px;
            color: #172027;
            line-height: 62px;
          }
          .des {
            font-size: 14px;
            color: #172027;
            line-height: 26px;
          }
        }
      }
    }
    .banner_img_box {
      display: block;
      width: 282px;
      height: 200px;
      margin-top: 300px;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .project_box {
    width: 1920px;
    height: 1080px;
    background: url("../assets/images/banner4.png") no-repeat;
    background-size: 100% 100%;
    .header {
      padding-top: 116px;
      text-align: center;
      .tit {
        font-size: 34px;
        color: #333333;
        line-height: 56px;
        padding-bottom: 24px;
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 60px;
          height: 2px;
          background-color: #cc0000;
          position: absolute;
          left: 570px;
          bottom: 13px;
        }
      }
      .des {
        font-size: 16px;
        color: #333333;
        line-height: 34px;
      }
    }
    .main {
      padding-top: 88px;
      text-align: center;
      .mr {
        margin-right: 26px;
      }
      .option_box {
        display: inline-block;
        width: 372px;
        height: 468px;
        border: 2px solid #e4e4e4;
        background: #ffffff;
        vertical-align: top;
        .option_header {
          height: 148px;
          padding-top: 30px;
          background-color: #ffffff;
          img {
            display: block;
            margin: 0 auto;
          }
          h2 {
            padding-top: 15px;
            font-size: 22px;
            color: #333333;
            line-height: 50px;
          }
        }
        .option_main {
          padding: 0 12px;
          .text_des {
            font-size: 18px;
            color: #9d9d9d;
            padding: 25px 0;
          }
          h2 {
            font-size: 18px;
            color: #333333;
            line-height: 38px;
          }
        }
      }
    }
  }
  .about_box {
    width: 1920px;
    height: 960px;
    background: url("../assets/images/banner5.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .header {
      padding-top: 100px;
      font-size: 28px;
      color: #172027;
      line-height: 52px;
      text-align: center;
    }
    .box1 {
      width: 639px;
      height: 387px;
      position: absolute;
      left: 360px;
      top: 250px;
      img {
        display: block;
      }
    }
    .box2 {
      width: 720px;
      height: 398px;
      background-color: #f5f5f7;
      position: absolute;
      right: 360px;
      top: 292px;
      .tit {
        padding: 70px 120px 38px 78px;
        font-size: 22px;
        color: #0f78e6;
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 36px;
          height: 4px;
          background-color: #006fe4;
          position: absolute;
          bottom: 22px;
        }
      }
      .des {
        padding: 0 120px 38px 78px;
        font-size: 16px;
        color: #83868f;
        line-height: 34px;
      }
      .more {
        padding: 0 0 0 78px;
        a {
          display: block;
          width: 134px;
          height: 42px;
          line-height: 42px;
          font-size: 16px;
          color: #ffffff;
          background-color: #006fe4;
          text-align: center;
        }
      }
    }
  }
}
</style>
