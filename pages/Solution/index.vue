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
          <a href="javascript:void(0);" v-for="(item,index) in introList" :key="index" class="intro_option">
            <img :src="item.img" alt="" class="icon">
            <p class="name">{{item.title}}</p>
          </a>
        </div>
      </div>
      <!-- 能力 -->
      <div class="solution_box ability_box">
        <div class="width clearfix">
          <div class="box fl" v-for="(item,index) in ability" :key="index">
            <h2 class="header">{{item.title}}</h2>
            <div class="main">
              <a href="javascript:void(0);" class="option" v-for="(mitem,nindex) in item.options" :key="nindex" :class="[nindex === 0?'mr':'']">
                <img class="img_box" :src="mitem.img" alt="">
                <h3>{{mitem.til}}</h3>
                <p>{{mitem.des}}</p>
              </a>
            </div>
          </div>
        </div>
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
export default {
  data() {
    return {
      introList:[
        {
          img: intro1,
          title:'大数据预测更安全'
        },
        {
          img: intro2,
          title:'更多服务场景'
        },
        {
          img: intro3,
          title:'用户画像精准描述'
        },
        {
          img: intro4,
          title:'AI助力更省力'
        }
      ],
      ability:[
        {
          title:'精准的用户画像能力',
          options:[
            {
              img:ability1,
              tit:'线上行为',
              des:'基于APP行为数据'
            },
            {
              img:ability2,
              tit:'线下行为',
              des:'基于场景活动数据'
            }
          ]
        },
        {
          title:'实时的场景捕捉能力',
          options:[
            {
              img:ability3,
              tit:'线上捕捉',
              des:'通过大数据挖掘和行为建模来推测用户当下的手机使用行为场景'
            },
            {
              img:ability4,
              tit:'线下捕捉',
              des:'通过用户线下场景活动数据，分析用户当下时间所处的位置场景'
            }
          ]
        },
      ]
    }
  }
}
</script>
<style lang="less">
.page-solution{
  .banner_box{
    width: 1920px;
    height: 793px;
    background: url('../../assets/images/solutionbanner.png') no-repeat;
    background-size: 100% 100%;
    color: #fefeff;
    text-align: center;
    .tit{
      padding-top: 334px;
      font-size: 44px;
      line-height: 70px;
    }
    .tit_eng{
      font-size: 24px;
      line-height: 48px;
    }
  }
  .main_box{
    background-color: #BBDCF2;
    padding-top: 30px;
    padding-bottom: 72px;
    .solution_box{
      width: 1280px;
      margin: 0 auto;
    }
    .intro_box{
      padding: 62px 0 72px 0;
      background-color: #ffffff;
      text-align: center;
      .intro_option{
        display: inline-block;
        width: 25%;
        .icon{
          display: block;
          width: 117px;
          margin: 0 auto;
        }
        .name{
          padding-top: 20px;
          font-size: 18px;
          color: #666666;
          line-height: 50px;
        }
      }
    }
    .ability_box{
      background-color: #E3F4FB;
      margin-top: 34px;
      padding: 55px 0;
      .box{
        width: 50%;
        text-align: center;
        .header{
          font-size: 26px;
          color: #333333;
          line-height: 38px;
          font-weight: 400;
        }
        .main{
          padding-top: 64px;
          .mr{
            margin-right: 30px;
          }
          .option{
            display: inline-block;
            width: 280px;
            .img_box{ 
              display:block;
              width: 100px;
              margin: 0 auto;
            }
            h3{
              padding-top: 14px;
              font-size: 22px;
              color: #00a0e9;
              line-height: 40px;
            }
            p{
              padding-top: 25px;
              font-size: 20px;
              color: #666666;
              line-height: 32px;
            }
          }
        }
      }
    }
  }
}

</style>
