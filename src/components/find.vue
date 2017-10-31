<template>
  <div class='app'>
    <div class="headTop">
      <HeadTop :path=string ></HeadTop>
    </div>
    <div class="box">
      <ul v-for="item in findD.list">
        <li v-for="(key,index) in item.data">
          <img :src="key.image" alt="" :class="{big:index==0,mid:index!=0}">
          <div :class="{bottom:index==0,left:index!=0}" >
            <div :class="{word:index==0,word1:index!=0}">{{key.title}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HeadTop from './head'
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        string: '发现',
        dataF: null
      }
    },
    methods: {
      ...mapMutations(['adddataToFind'])
    },
    computed: {
      ...mapGetters(['findD'])
    },
    components: {
      HeadTop
    },
    watch: {
      dataF(){
        this.adddataToFind({data: this.dataF})
      }
    },
    created(){
      let ajax;
      let self = this
      if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
      } else {
        ajax = new ActiveXObject('Microsort.XMLHTTP');
      }
      ajax.onreadystatechange = function () {

        if (ajax.status == 200 && ajax.readyState == 4) {
          self.dataF = JSON.parse(ajax.responseText).data
//          self.adddataToFind({data:data.Datas})
        }
      };
      ajax.open('get', 'http://api.reader.ibczy.com/api/home.feature?data={%22columnId%22:8,%22gender%22:1,%22pageNo%22:1,%22pageSize%22:3}', true);
      ajax.send()
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .app {
    width: 100%;
    .headTop {
      width: 100%;
      position: fixed;
      top: 0;
      height: 50px;
    }
    .box {
      position: absolute;
      top: 50px;
      bottom: 50px;
      left: 0;
      right: 0;
      overflow: auto;
      ul {
        width: 100%;
        li {
          display: flex;
          padding: 15px;
          border-bottom: 1px solid #ccc;
          position: relative;
          width: 100%;
          .big {
            width: 100%;
            height: 100%;
          }
          .bottom {
            width: 90%;
            height: 30px;
            position: absolute;
            bottom: 15px;
            .word {
              width: 100%;
              height: 100%;
              line-height: 30px;
              padding: 0 15px;
              color: white;
             overflow: hidden;
            }
          }
          .mid {
            flex: 0 0 110px;
            height: 80px;
          }
          .left {
            flex: 1;
            width: 100%;
            height: 80px;
            .word1 {
              width: 100%;
              height: 60px;
              line-height: 30px;
              padding-left: 10px;
            }
          }
        }
      }
    }
    .box::-webkit-scrollbar {
      display: none
      /* 隐藏滚动条，但依旧具备可以滚动的功能 */
    }

  }
</style>
