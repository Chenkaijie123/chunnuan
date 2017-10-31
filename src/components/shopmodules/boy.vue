<template>
  <div class='app'>
    <router-link to="/bookwindow" >
    <div class="showImg" v-if="bestData.datas">
      <ul ref="supports" class='ban'>
        <li @click="getBookwindowData(item)" v-for="item in bestData.datas.banner.concat([bestData.datas.banner[0]])" :key="item.id"><img :src='item.image' alt=""></li>
      </ul>
    </div>
    </router-link>
    <div class="main" v-if="bestData.datas">
      <router-link to="/bookwindow" >
        <div class="box" >
          <div class="head-title">
            <span class="title-nav">{{bestData.datas.list[0].title}}</span>
            <span class="title-dec">{{bestData.datas.list[0].featuresTitle}}</span>
          </div>
          <div class="body">
            <div class="body-pic" @click="getBookwindowData(bestData.datas.list[0].data[0])"><img :src="bestData.datas.list[0].data[0].image" alt=""></div>
            <div class="body-dec">
              <div class="book-name">{{bestData.datas.list[0].data[0].title}}</div>
              <div class="author">{{bestData.datas.list[0].data[0].subTitle}}</div>
              <div class="book-dec">{{bestData.datas.list[0].data[0].intro}}</div>
            </div>
          </div>
        </div>
      </router-link>
      <div class="all-book" v-for="(item,index) in bestData.datas.list">
        <router-link to="/bookwindow">
          <div class="book-box" v-if="index!=0">
            <div class="title-name">
              <div class="name-nav">{{item.title}}</div>
            </div>
            <div class="book-show" v-for="key in item.data">
              <div class="book-list">
              <span class="book-message">
                <img :src="key.image" alt=""  @click="getBookwindowData(key)">
                <div class="book-info">
                  <div class="name">{{key.title}}</div>
                  <div class="book-author">{{key.subTitle}}</div>
                </div>
              </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  export default {
    data(){
      return {
        bestData: {}
      }
    },
    methods: {
      ...mapActions(['startHeaderTransition', 'linstenTranstionEnd', 'transitionAgain']),
      ...mapMutations(['RECEIVE_LENGTH','creatBookWindowData']),
      callback() {
        this.transitionAgain({obj: this.$refs.supports, modules: 'best'})
      },
      getBookwindowData(json){
        this.creatBookWindowData({json:json})
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
          self.bestData = JSON.parse(ajax.responseText).data
        }
      };
      ajax.open('get', 'http://api.reader.ibczy.com/api/home.feature?data={%22columnId%22:2,%22gender%22:1,%22pageNo%22:1,%22pageSize%22:20}', true);
      ajax.send()
    },
    watch: {
      bestData(val) {
        if (val.datas.banner) {
          let wid = document.body.clientWidth
          this.$nextTick(() => { // 等待整个页面渲染完毕之后再获取ul
            this.RECEIVE_LENGTH({length: val.datas.banner.length, width: wid})
            let obj = this.$refs.supports
            this.startHeaderTransition(obj)
            this.linstenTranstionEnd({obj: obj, callback: this.callback})
          })
        }
      }
    }
  }
</script>


<style lang="less" scoped rel="stylesheet/less">
  .app {
    width: 100%;
    overflow: auto;
    height: 100%;
    /*position: relative;*/
    .showImg {
      width: 100%;
      height: 120px;
      overflow: hidden;
      .ban {padding: 0;
        width: 1000%;
        height: 120px;
        li {
          list-style: none;
          width: 10%;
          float: left;
          img {
            width: 100%;
            height: 120px;
          }
        }
      }
    }
    .main {
      width: 100%;
      .box {
        width: 100%;
        height: 180px;
        padding: 10px;
        .head-title {
          width: 100%;
          height: 30px;
          .title-nav {
            padding-left: 10px;
            height: 100%;
            border-left: 5px solid red;
            font-size: 17px;
            font-weight: bold;
            float: left;
            line-height: 30px;
          }
          .title-dec {
            float: right;
            height: 100%;
            line-height: 30px;
            font-size: 13px;
            color: #C1C1C1
          }
        }
        .body {
          height: 150px;
          padding: 10px 0;
          display: flex;
          .body-pic {
            flex: 0 0 100px;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .body-dec {
            flex: 1;
            padding-left: 15px;
            height: 100%;
            .book-name {
              font-size: 14px;
              font-weight: 700;
            }
            .author {
              font-size: 12px;
              margin-top: 15px;
            }
            .book-dec {
              font-size: 13px;
              margin-top: 15px;
            }
          }
        }
      }
      .all-book {
        margin-bottom: 20px;
        width: 100%;
        /*height: 430px;*/
        .book-box {
          width: 100%;
          /*height: 100%;*/
          .title-name {
            width: 100%;
            height: 30px;
            overflow: hidden;
            padding-left: 10px;
            .name-nav {
              padding-left: 10px;
              height: 100%;
              border-left: 5px solid red;
              font-size: 17px;
              font-weight: bold;
              float: left;
              line-height: 30px;
            }
          }
          .book-show {
            width: 100%;
            /*height: 300px;*/
            .book-list {
              width: 100%;
              /*height: 100%;*/
              .book-message {
                float: left;
                display: inline-block;
                width: 33%;
                height: 150px;
                padding: 10px 15px;
                img {
                  width: 100%;
                  height: 75%;
                }
                .book-info {
                  width: 100%;
                  height: 25%;
                  .name {
                    margin-top: 3px;
                    width: 100%;
                    height: 20px;
                    overflow: hidden;
                    font-size: 13px;
                    font-weight: 700;
                  }
                  .book-author {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }

  }

  .app::-webkit-scrollbar {
    display: none
    /* 隐藏滚动条，但依旧具备可以滚动的功能 */
  }
</style>
