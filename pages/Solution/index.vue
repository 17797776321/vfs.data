<template>
  <div class="page-solution">
    <div class="banner_box">
      <h2 class="tit">当数据发出声音时，我们可以帮助您找到最佳倾听方式</h2>
      <p class="tit_eng">When data sounds, we can help you find the best way to listen.</p>
    </div>
    <div class="main_box">
      <!-- 项目介绍 -->
      <div class="solution_box intro_box">
        <div class="width">
          <a href="javascript:void(0);"
             v-for="(item,index) in introList"
             :key="index"
             class="intro_option">
            <img :src="item.img"
                 alt=""
                 class="icon">
            <p class="name">{{item.title}}</p>
          </a>
        </div>
      </div>
      <!-- 能力 -->
      <div class="solution_box ability_box">
        <div class="width clearfix">
          <div class="box fl"
               v-for="(item,index) in ability"
               :key="index">
            <h2 class="header">{{item.title}}</h2>
            <div class="main">
              <a href="javascript:void(0);"
                 class="option"
                 v-for="(mitem,nindex) in item.options"
                 :key="nindex"
                 :class="[nindex === 0?'mr':'']">
                <img class="img_box"
                     :src="mitem.img"
                     alt="">
                <h3>{{mitem.til}}</h3>
                <p>{{mitem.des}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="solution_box industry clearfix">
        <div class="side fl"></div>
        <ul class="main fl">
          <li class="optioon fl"
              v-for="(item,index) in industryList"
              :key="index"
              :class="{'mt':index>2,'mr':(index+1)%3 != 0,'bgb colorw':(index+1)%2 === 0}">
            <img :src="item.img"
                 alt=""
                 class="bg">
            <div class="mask">
              <h2 class="tit">{{item.title}}</h2>
              <p class="des">{{item.des}}</p>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import intro1 from '@/assets/images/intro1.png'
import intro2 from '@/assets/images/intro2.png'
import intro3 from '@/assets/images/intro3.png'
import intro4 from '@/assets/images/intro4.png'

import ability1 from '@/assets/images/ability1.png'
import ability2 from '@/assets/images/ability2.png'
import ability3 from '@/assets/images/ability3.png'
import ability4 from '@/assets/images/ability4.png'

import ind1 from '@/assets/images/ind1.png'
import ind2 from '@/assets/images/ind2.png'
import ind3 from '@/assets/images/ind3.png'
import ind4 from '@/assets/images/ind4.png'
import ind5 from '@/assets/images/ind5.png'
import ind6 from '@/assets/images/ind6.png'


export default {
  data () {
    return {
      introList: [
        {
          img: intro1,
          title: '大数据预测更安全'
        },
        {
          img: intro2,
          title: '更多服务场景'
        },
        {
          img: intro3,
          title: '用户画像精准描述'
        },
        {
          img: intro4,
          title: 'AI助力更省力'
        }
      ],
      ability: [
        {
          title: '精准的用户画像能力',
          options: [
            {
              img: ability1,
              tit: '线上行为',
              des: '基于APP行为数据'
            },
            {
              img: ability2,
              tit: '线下行为',
              des: '基于场景活动数据'
            }
          ]
        },
        {
          title: '实时的场景捕捉能力',
          options: [
            {
              img: ability3,
              tit: '线上捕捉',
              des: '通过大数据挖掘和行为建模来推测用户当下的手机使用行为场景'
            },
            {
              img: ability4,
              tit: '线下捕捉',
              des: '通过用户线下场景活动数据，分析用户当下时间所处的位置场景'
            }
          ]
        },
      ],
      industryList: [
        {
          title: '移动互联网行业',
          des: '洞察用户属性，提升运营效果，智能解析行业新趋势',
          img: ind1
        },
        {
          title: '金融行业',
          des: '精准客群定位，促进产品推广与转化',
          img: ind2
        },
        {
          title: '营销行业',
          des: '通过大数据用户画像与地理位置信息的结合，优化广告投放效果',
          img: ind3
        },
        {
          title: '旅游行业',
          des: '与各省市旅游局合作，监测景区人流状况并智能分析',
          img: ind4
        },
        {
          title: '房地产行业',
          des: '为土地研究、区域规划、房产政策提供数据咨询和指导',
          img: ind5
        },
        {
          title: '公共服务',
          des: '为国家地震灾害、春运等提供数据支持与服务',
          img: ind6
        }
      ]
    }
  }
}
</script>
<style lang="less">
.page-solution {
  .banner_box {
    width: 1920px;
    height: 793px;
    background: url("../../assets/images/solutionbanner.png") no-repeat;
    background-size: 100% 100%;
    color: #fefeff;
    text-align: center;
    .tit {
      padding-top: 334px;
      font-size: 44px;
      line-height: 70px;
    }
    .tit_eng {
      font-size: 24px;
      line-height: 48px;
    }
  }
  .main_box {
    background-color: #bbdcf2;
    padding-top: 30px;
    padding-bottom: 72px;
    .solution_box {
      width: 1280px;
      margin: 0 auto;
    }
    .intro_box {
      padding: 62px 0 72px 0;
      background-color: #ffffff;
      text-align: center;
      .intro_option {
        display: inline-block;
        width: 25%;
        .icon {
          display: block;
          width: 117px;
          margin: 0 auto;
        }
        .name {
          padding-top: 20px;
          font-size: 18px;
          color: #666666;
          line-height: 50px;
        }
      }
    }
    .ability_box {
      background-color: #e3f4fb;
      margin-top: 34px;
      padding: 55px 0;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 334px;
        background-color: #666666;
        position: absolute;
        top: 34px;
        left: 610px;
      }
      .box {
        width: 50%;
        text-align: center;
        .header {
          font-size: 26px;
          color: #333333;
          line-height: 38px;
          font-weight: 400;
        }
        .main {
          padding-top: 64px;
          .mr {
            margin-right: 30px;
          }
          .option {
            display: inline-block;
            width: 280px;
            .img_box {
              display: block;
              width: 100px;
              margin: 0 auto;
            }
            h3 {
              padding-top: 14px;
              font-size: 22px;
              color: #00a0e9;
              line-height: 40px;
            }
            p {
              padding-top: 25px;
              font-size: 20px;
              color: #666666;
              line-height: 32px;
            }
          }
        }
      }
    }
    .industry {
      margin-top: 38px;
      .side {
        width: 310px;
        height: 634px;
        background: url("../../assets/images/industry.png") no-repeat;
        background-size: 100% 100%;
      }
      .main {
        width: 960px;
        margin-left: 10px;
        vertical-align: top;
        .mt {
          margin-top: 13px;
        }
        .mr {
          margin-right: 14px;
        }
        .bgw {
          background-color: #ffffff;
        }
        .bgb {
          background-color: #01acf3 !important;
        }
        .colorw {
          color: #ffffff !important;
        }
        .optioon {
          width: 310px;
          height: 310px;
          position: relative;
          background-color: #ffffff;
          vertical-align: top;
          .bg {
            display: block;
            position: absolute;
            bottom: 10px;
            right: 10px;
            z-index: 2;
          }
          .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 5;
            .tit{
              padding-top: 32px;
              font-size: 28px;
              font-weight: 500;
              color:#333333;
              line-height: 48px;
              padding-left: 20px;
            }
            .des{
              padding: 76px 44px 0 20px;
              font-size: 20px;
              color: #333333;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
