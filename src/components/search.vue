<template>
    <div class="app">
      <div class="search-head">
        <router-link to="/shop/best">
          <div class="back" ><div class="glyphicon glyphicon-chevron-left back-box"></div></div>
        </router-link>
        <div class="input"><div class="input-box"><input type="text" value="请输入书名或作者" ref="input"></div></div>
        <div class="search-icon" @click="newMessage"><div class="find glyphicon glyphicon-search"></div></div>
      </div>
      <div class="history-box" v-if="history.length>0">
        <div class="history">
          <div class="left">搜索历史记录</div>
          <div class="right" @click="cleanHistory"><span class="glyphicon glyphicon-trash"></span> &nbsp;清空</div>
        </div>
        <div class="searched-book"  v-for="item in history">
          <span class="glyphicon glyphicon-time"></span>
          {{item}}
        </div>
      </div>

      <div class="hot">
        <div class="left">大家都在搜</div>
      </div>
    </div>
</template>

<script>
  import {mapActions,mapGetters,mapMutations} from 'vuex'
  import Router from 'vue-router'
  import vue from 'vue'
    export default {
        data(){
            return {}
        },
      computed:{
        ...mapGetters(['history'])
      },
      methods:{
        ...mapActions(['historyMes']),
        ...mapMutations(['cleanHistory']),
           newMessage(){
             this.$refs.input.onfocus=function () {
               this.value=''
             }
            if(this.$refs.input.value!='请输入书名或作者'){
              let mes=this.$refs.input.value
              this.historyMes(mes)

            }
            }
      }
    }
</script>

<style lang="less" rel="stylesheet/less">
  .app{
    width: 100%;
    .search-head{
      display: flex;
      width: 100%;
      height: 50px;
      background-color: rgba(255, 0, 0, 0.72);
      a{flex: 0 0 70px;
        .back {
          color: #000;
          height: 100%;
          .back-box{
            height: 100%;
            width: 100%;
            font-size: 20px;
            line-height: 50px;
            text-align: center;
          }
        }
      }
      .input {
        flex: 1;
        height: 100%;
        input{
          padding-left: 10px;
          color: #ccc;
          width: 100%;
          height: 36px;
          margin-top: 7px;
        }
      }
      .search-icon{
        flex: 0 0 70px;
        height: 100%;
        .find{
          width: 100%;
          height: 100%;
          line-height: 50px;
          font-size: 20px;
          text-align:center;
        }
      }
    }
    .history-box{
      width: 100%;
      .history{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
        .left{
          font-weight: 700;
          float: left;
          font-size: 14px;
          line-height: 50px;
          padding-left: 10px;
        }
        .right{
          float: right;
          line-height:50px;
          padding-right: 10px;
          font-size: 14px;
          color: #ccc;
          span{
            height: 50px;
            display: inline-block;
            font-size: 14px;
            line-height: 50px;
            color: #ccc;
          }
        }
      }
      .searched-book{
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
        width: 100%;
        height: 50px;
        font-size: 14px;
        line-height: 50px;
        span{
          margin-right: 5px;
        }
      }
    }

    .hot{
      width: 100%;
      height: 50px;
      .left{
        font-weight: 700;
        float: left;
        font-size: 14px;
        line-height: 50px;
        padding-left: 10px;
      }
    }
  }
</style>
