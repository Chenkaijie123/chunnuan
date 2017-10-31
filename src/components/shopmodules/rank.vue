<template>
  <div class='app'>
    <div class="header"></div>
    <div class="body">
      <div class="body-nav" ref="navScroll">
        <ul>
          <li class="nav-list" v-for="(item,index) in rankData" @click="show(index)" :class="{active:ind===index}">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="body-mess" v-if="rankData[ind]">
        <div class="box" v-for="key in rankData[ind].list">
          <router-link to="/bookwindow">
            <div class="pic"><img :src='key.coverUrl' alt="" @click="getBookwindowData(key)"></div>
          </router-link>
          <div class="message">
            <div class="title">{{key.title}}</div>
            <div class="dec">{{key.intro}}</div>
            <div class="author"><span class="authorName">{{key.authorName}}</span> | <span
              class="value">{{key.value}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll'
  import {mapMutations} from 'vuex'
  export default {
    data(){
      return {
        rankData: [],
        ind: 0
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
          self.rankData = JSON.parse(ajax.responseText).data
        }
      };
      ajax.open('get', 'http://api.reader.ibczy.com/api/book.ranking?data={%22gender%22:1}', true);
      ajax.send()
      this.$nextTick(() => {
        this.navScroll()
      })

    },
    methods: {
      ...mapMutations(['creatBookWindowData']),
      show($index){
        this.ind = $index
      },
      navScroll(){
        this.navS = new IScroll(this.$refs.navScroll, {
          click: true
        })
      },
      getBookwindowData(json){
        this.creatBookWindowData({json: json})
        json.image = json.coverUrl
      }
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .app {
    width: 100%;
    height: auto;
    .header {
      position: fixed;
      width: 100%;
      height: 100px;
      background-color: antiquewhite;
    }
    .body {
      position: absolute;
      top: 100px;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      .body-nav::-webkit-scrollbar {
        display: none
        /* 隐藏滚动条，但依旧具备可以滚动的功能 */
      }
      .body-nav {
        overflow: auto;
        flex: 0 0 70px;
        width: 70px;
        .nav-list {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #636363;
          border-bottom: 1px solid #ddd;
          background: #EEEEEE;
          font-weight: 500;
        }
        .active {
          color: red;
          background: white;
        }
      }
      .body-mess::-webkit-scrollbar {
        display: none
        /* 隐藏滚动条，但依旧具备可以滚动的功能 */
      }
      .body-mess {
        flex: 1;
        overflow: auto;
        .box {
          width: 100%;
          height: 100px;
          padding: 10px;
          display: flex;
          .pic {
            flex: 0 0 60px;
            height: 100%;
            img {
              width: 55px;
              height: 100%;
            }
          }
          .message {
            flex: 1;
            height: 100%;
            transform: scale(.8);
            margin-top: -8px;
            margin-left: -15px;
            .title {
              width: 100%;
              color: #111;
              font-size: 16px;
            }
            .dec {
              width: 100%;
              margin-top: 10px;
              font-size: 15px;
            }
            .author {
              margin-top: 10px;
              .authorName, .value {
                font-size: 14px;
                margin-top: 6px;
              }
              .value {
                color: red;
              }
            }
          }
        }
      }
    }
  }
</style>
