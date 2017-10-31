<template>
  <div class='app'>
    <div class="title-text">春暖阅读</div>
    <div class="title-text glyphicon glyphicon-menu-right"></div>
    <div class="title-text">{{path}}</div>
    <div class="title-text right glyphicon glyphicon-pencil" @click="edu"></div>
    <router-link to="/search">
      <div class="title-text right glyphicon glyphicon-search"></div>
    </router-link>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    props:{
        path:{
            type:String
        }
    },
    methods:{
      ...mapMutations(['edu'])
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .app {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    padding: 0 20px;
    background-color: red;
    .title-text{
      display: inline-block;
      font-size: 15px;
      color: white;
      line-height: 50px;
      height: 100%;
    }
    .right{
      float: right;
      margin-left: 10px;
    }
    /*.icon{*/
      /*display: inline-block;*/
      /*width: 15px;*/
      /*height: 15px;*/
      /*border: 1px solid white;*/
    /*}*/
  }
</style>
