<template>
  <div id="app">
    <div class="bottom-nav" >
      <div class="nav"><router-link to="/shelf"><div class="text"><i class="iconpic glyphicon glyphicon-list-alt"></i>书架</div></router-link></div>
      <div class="nav"@click="addRouter"><router-link to="/shop"><div class="text"><i class="iconpic glyphicon glyphicon-shopping-cart"></i>书城</div></router-link></div>
      <div class="nav"><router-link to="/find"><div class="text"><i class="iconpic glyphicon glyphicon-eye-open"></i>发现</div></router-link></div>
      <div class="nav"><router-link to="/me"><div class="text"><i class="iconpic glyphicon glyphicon-user"></i>我的</div></router-link></div>
    </div>
    <router-view :data="book"></router-view>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import router from './router'
export default {
  name: 'app',
  data(){
      return{

      }
  },
  methods:{
      addRouter(){
          router.push('/shop/best')
      }
  },
  computed:{
    ...mapGetters(['book'])
  },
  created(){

  }
}
</script>

<style lang="less" rel="stylesheet/less">
#app {
.bottom-nav{
  z-index: 100;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  .nav{
    flex: 1;
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #111;
      .text{
        transform: scale(.7);
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        .iconpic{
          display: inline-block;
          width: 100%;
          height: 80%;
          font-size: 30px;
          text-align: center;
          line-height: 26px;
        }
      }

    }
    .active{
      color:red;
    }

  }
}
}
</style>
