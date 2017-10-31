<template>
    <div class='app'>
      <HeadTop :path=string></HeadTop>
      <div class="head-nav">
        <div class="nav">
          <router-link to="/shop/best">精选</router-link>
        </div>
        <div class="nav">
          <router-link to="/shop/month">包月</router-link>
        </div>
        <div class="nav">
          <router-link to="/shop/rank">排行</router-link>
        </div>
        <div class="nav">
          <router-link to="/shop/boy" >男频</router-link>
        </div>
        <div class="nav">
          <router-link to="/shop/girl">女频</router-link>
        </div>
        <div class="nav">
          <router-link to="/shop/finish">完本</router-link>
        </div>
      </div>
      <div class="body">
        <router-view ></router-view>
      </div>

    </div>
</template>

<script>
  import HeadTop from './head'
  import Router from 'vue-router'
  export default {
    data () {
      return {
        string:'书城',

      }
    },
    components:{
      HeadTop
    }

  }
</script>

<style lang="less" scoped rel="stylesheet/less">
    .app {
      height: 100px;
      .head-nav{
        position: fixed;
        top:50px;
        display: flex;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #ccc;
        .nav{
          height: 100%;
          line-height: 50px;
          flex: 1;
          text-align: center;
          a{
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #111;
          }
          .active{
            color: red!important;
            background: white!important;
          }
        }
      }
      .body{
        position: absolute;
        top:100px;
        bottom: 50px;
        width: 100%;
        overflow: hidden;
      }
    }
</style>
