<template>
  <div class="page-wisdom">
    <div class="banenr_box">
      <div style="padding-top:368px">
        <h2 class="content" ref="banenr_box_tit">以智慧数据为基础，立足行业新场景</h2>
      </div>
    </div>
    <div class="box1">
      <div class="width myhidden" ref="box1">
        <div class="header">
          <h1>大数据</h1>
          <h2>云端自动拓客</h2>
          <h2>挖掘上百万精准客户</h2>
        </div>
        <div class="main">
          <p>全天候服务</p>
          <p>云端24小时自动拓客</p>
          <p>不断挖掘行业精准客户</p>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="width myhidden" ref="box2">
        <div class="header">
          <h1>小微数据</h1>
          <h2>基于微信的Social-CRM系统</h2>
        </div>
        <div class="main">
          <p>基于微信的8亿用户的信息</p>
          <p>帮助企业与客户建立强连接</p>
          <p>提升生意转化率的SaaS级社会化客户关系管理平台</p>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="width myhidden" ref="box3">
        <div class="header">
          <h1>用户画像</h1>
          <h1>精准客户分群</h1>
        </div>
        <div class="main">
          <p>4大类别30万标签词库</p>
          <p>社交数据+用户行为数据+多平台数据</p>
          <p>建模用户分析，洞察消费倾向</p>
          <p>精准客户分群和精准营销</p>
        </div>
      </div>
    </div>
    <div class="box4">
      <div class="width myhidden" ref="box4">
        <div class="header">
          <h2><b>拓展</b>新客户</h2>
        </div>
        <div class="main">
          <p>云端全天24小时自动拓客</p>
          <p>通过行业微信群添加精准客户</p>
          <p>导入数据库中</p>
        </div>
      </div>
    </div>
    <div class="box5">
      <div class="width myhidden" ref="box5">
        <div class="header">
          <h2><b>大数据</b>分析</h2>
        </div>
        <div class="main">
          <p>通过人工智能语义分析、扫描每个微信好友的朋友圈</p>
          <p>给每个好友不断标签化</p>
          <p>最终形成精准的用户画像</p>
          <p>实现精准定向营销</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ScrollAnimate } from '@/utils/animate.js'
export default {
  asyncData (context){
    return {
      dev:context.isDev
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(()=>{
      new ScrollAnimate(this.$refs.banenr_box_tit,'fadeInUp',0)

      new ScrollAnimate(this.$refs.box1,'fadeInUp',0)
      new ScrollAnimate(this.$refs.box2,'fadeInUp',0)
      new ScrollAnimate(this.$refs.box3,'fadeInUp',0)
      new ScrollAnimate(this.$refs.box4,'fadeInUp',0)
      new ScrollAnimate(this.$refs.box5,'fadeInUp',0)
    })
  }
}
</script>
<style lang="less">
.page-wisdom{
  .banenr_box{
    width: 1920px;
    height: 797px;
    background: url('../../assets/images/wisdombanner.png') no-repeat;
    background-size: 100% 100%;
    .content{
      font-size: 40px;
      color: #ffffff;
      text-align: center;
      line-height: 60px;
    }
  }
  .box1{
    width: 1920px;
    height: 631px;
    background: url('../../assets/images/wisdom1.png') no-repeat;
    background-size: 100% 100%;
    .header{
      padding-top: 148px;
      padding-left: 30px;
      h1{
        line-height: 72px;
        font-size: 58px;
        color: #303030;
        font-weight: 500;
      }
      h2{
        line-height: 72px;
        font-size: 58px;
        color: #303030;
        font-weight: 300;
      }
    }
    .main{
      padding-top: 30px;
      padding-left: 30px;
      p{
        font-size: 20px;
        color: #303030;
        line-height: 34px;
      }
    }
  }
  .box2{
    width: 1920px;
    height: 698px;
    background: url('../../assets/images/wisdom2.png') no-repeat;
    background-size: 100% 100%;
    .header{
      padding-top: 170px;
      padding-left: 30px;
      h1{
        line-height: 92px;
        font-size: 58px;
        color: #303030;
        font-weight: 500;
      }
      h2{
        line-height: 86px;
        font-size: 58px;
        color: #303030;
        font-weight: 300;
      }
    }
    .main{
      padding-top: 38px;
      padding-left: 30px;
      p{
        font-size: 20px;
        color: #303030;
        line-height: 34px;
      }
    }
  }
  .box3{
    width: 1920px;
    height: 700px;
    background: url('../../assets/images/wisdom3.png') no-repeat;
    background-size: 100% 100%;
    .header{
      padding-top: 224px;
      padding-left: 30px;
      h1{
        line-height: 56px;
        font-size: 44px;
        color: #393951;
        font-weight: 500;
      }
    }
    .main{
      padding-top: 34px;
      padding-left: 30px;
      p{
        font-size: 18px;
        color: #303030;
        line-height: 28px;
      }
    }
  }
  .box4{
    width: 1920px;
    height: 700px;
    background: url('../../assets/images/wisdom4.png') no-repeat;
    background-size: 100% 100%;
    .header{
      padding-top: 231px;
      padding-left: 30px;
      h2{
        line-height: 72px;
        font-size: 58px;
        color: #303030;
        font-weight: 300;
      }
    }
    .main{
      padding-top: 24px;
      padding-left: 30px;
      p{
        font-size: 20px;
        color: #767676;
        line-height: 34px;
      }
    }
  }
  .box5{
    width: 1920px;
    height: 700px;
    background: url('../../assets/images/wisdom5.png') no-repeat;
    background-size: 100% 100%;
    .header{
      padding-top: 260px;
      padding-left: 30px;
      h2{
        line-height: 76px;
        font-size: 58px;
        color: #303030;
        font-weight: 300;
      }
    }
    .main{
      padding-top: 26px;
      padding-left: 30px;
      p{
        font-size: 20px;
        color: #7B7B7B;
        line-height: 34px;
      }
    }
  }
}
</style>
