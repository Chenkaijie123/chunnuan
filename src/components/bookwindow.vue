<template>
    <div id="app">
      <div class="header">
        <router-link to='/shop/best'><div class="back" >＜</div></router-link>
        <div class="title">书籍详情</div>
      </div>
      <div class="container">
        <div class="book-message">
          <div class="head">
            <div class="head-pic" v-if="data[0]">
              <img :src="data[0].image" alt="">
            </div>
            <div class="head-text" v-if="data[0]">
              <div class="head-title">{{data[0].title}}</div>
              <div class="head-author">{{data[0].subTitle}}</div>
              <div class="word-count"></div>
              <div class="advertisement">开通包月，享受８折优惠＞</div>
            </div>
          </div>
          <div class="info" v-if="data[0]">{{data[0].intro}}</div>
          <div class="nav">
            <div class="n">目录</div>
            <div class="n-list"></div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="aleart">
          <!--<transition name="aleart">-->
            <div class="text" v-show="isShow" >{{text}}</div>
          <!--</transition>-->
        </div>
        <div class="down-load">
          <i class="glyphicon glyphicon-download-alt"></i>下载
        </div>
        <div class="reading">
          <i class="glyphicon glyphicon-list-alt"></i>
          免费阅读
        </div>
        <div class="add-to" @click="collect(data[0])">
          <i class="glyphicon glyphicon-heart"></i>加入书架
        </div>
      </div>
    </div>
</template>

<script>
  import router from 'vue-router'
  import {mapActions,mapGetters} from 'vuex'
    export default {
      data(){
          return{
            isShow:false,
            text:'添加书架成功'
          }

      },
       props:{
           data:{
               type:Array
           }
       },
      methods:{
        ...mapActions(['addToMyCollection']),
           collect(json){
             this.addToMyCollection({obj:json})
             this.isShow=true
           }
      },
      computed:{
        ...mapGetters(['collectionBook'])
      }
    }
</script>

<style lang="less" scoped rel="stylesheet/less">
#app{
  width: 100%;
  position: relative;
  .header{
    width: 100%;
    height: 50px;
    background-color: red;
    padding: 0 20px;
    .back{
      float: left;
      width: 30px;
      height: 100%;
      font-size: 20px;
      line-height: 50px;
      color: white;
    }
    .title{
      width: 100%;
      height: 50px;
      text-align: center;
      font-size: 18px;
      color: white;
      line-height: 50px;
      padding-right: 30px;
    }
  }
  .container{
    position: absolute;
    top: 50px;
    bottom: 50px;
    width: 100%;
    .book-message{
      width: 100%;
      padding: 10px 10px;
      .head{
        display: flex;
        width: 100%;
        height: 140px;
        overflow: hidden;
        .head-pic{
          flex: 0 0 100px;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .head-text{
          flex: 1;
          height: 140px;
          padding-left: 10px;
          .head-title{
            margin-top: 15px;
            font-size: 15px;
            font-weight: bold;
          }
          .head-author{
            margin-top: 15px;
            font-size: 13px;
            margin-top: 10px;
          }
          .advertisement{
            margin-top: 15px;
            color: #fc0;
            font-size: 13px;
          }
        }
      }
      .info{
        margin-top: 10px;
        height: 70px;
      }
      .nav{
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        width: 100%;
        height: 60px;
        padding:  0 10px;
        .n{
          width: 40px;
          height: 100%;
          font-size: 14px;
          line-height: 60px;

        }
      }
    }

  }
  .footer{
    background-color: white;
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 50px;
    display: flex;
    .aleart{
      position: absolute;
      bottom: 80px;
      height: 36px;
      width: 100%;
      transition: all .6s;
      .text{
        width: 110px;
        background-color: rosybrown;
        height: 100%;
        margin: 0 auto;
        line-height: 36px;
        border-radius:18px ;
        text-align: center;

      }
    }
    .down-load,.add-to{
      flex: 0 0 100px;
      height: 50px;
      text-align: center;
      i{
        display: block;
        height: 30px;
        font-size: 18px;
        color: red;
        line-height: 34px;
      }
    }
    .reading{
      color: white;
      background-color: red;
      flex: 1;
      text-align: center;
      i{
        display: block;
        height: 30px;
        font-size: 18px;
        color: red;
        line-height: 34px;
        color: white;
      }
    }
  }
}
.aleart-enter,.aleart-leave-to{
  opcaity:0
}
</style>
