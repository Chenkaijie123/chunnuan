<template>
    <div class='app'>
      <headTop :path=string></headTop>
      <div class="start">
        <img src="" alt="暂无">
        <div class="start-right">
          <div class="title">最强反套路系统</div>
          <div class="message">太上布衣</div>
          <div class="status">未读</div>
          <button>开始阅读</button>
        </div>
      </div>
      <div class="my-collection">
        <div class="book-list">
            <div class="book" v-for="item in collectionBook" >
              <img :src="item.image" alt="" >
              <div class="title">{{item.title}}</div>
              <div class="status" v-if="edu"><button  @click="bookMessage(item)">×</button ></div>
            </div>
        </div>
      </div>
      <transition name="fade">
        <div class="make-sure" v-if="isShow" @click="hiddenSureBox($event)">
            <div class="sure-box">
              <div class="sure-text">
                你真的要把 <span class="name">{{delectBook}}</span> 从我的收藏中删除吗?
              </div>
              <div class="btn">
                <div class="btn-box"><button class="select" @click=" sureToDelect">确定</button></div>
                <div class="btn-box"><button class="select no">取消</button></div>
              </div>
            </div>
        </div>
      </transition>

    </div>
</template>

<script>
  import HeadTop from './head'
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
  data () {
    return {
      string:'书架',
      isShow:false,    //控制选择框
      isDelect:false,       //是否删除数据
      delectBookMessage:{} ,
      delectBook:''
    }
  },
    methods:{
      ...mapActions(['delectSellection']),
//      ...mapMutations(['delectSellection']),
      hiddenSureBox(e){
          let name=e.target.className.toLowerCase()
        if(name==='make-sure'||name==='select'||name==='select no')
          this.isShow=!this.isShow
      },
      sureToDelect(){
          this.isDelect=true
          this.delectSellection(this.delectBookMessage)
      },
      bookMessage(obj){
          this.delectBookMessage=obj
         this.delectBook=obj.title
          this.isShow=!this.isShow
      }
    },
  components:{
    HeadTop
  },
  computed:{
    ...mapGetters(['collectionBook','edu'])
  }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
    .app {
      .start{
        margin-top: 10px;
        display: flex;
        position: absolute;
        top:40px;
        width: 100%;
        height: 160px;
        padding: 10px;
        img{
          flex: 0 0 100px;
          width: 100px;
          height: 100%;
        }
        .start-right{
          padding-left: 10px;
          flex: 1;
          .title{
            font-size: 16px;
            font-weight: 500;
          }
          .message,.status{
            margin-top: 15px;
            font-size: 12px;
            color: #222;
            height: 18px;
          }
         button{
           margin-top: 10px;
           width: 130px;
           height: 30px;
           background-color: whitesmoke;
           text-align: center;
           line-height: 30px;
           font-size: 13px;
           border-radius: 3px;
           outline: none;
           border: none;
         }
        }
      }
      .my-collection::-webkit-scrollbar {
        display: none
        /* 隐藏滚动条，但依旧具备可以滚动的功能 */
      }
      .my-collection{
        padding-top: 15px;
        position: absolute;
        top:210px;
        bottom: 50px;
        overflow: auto;
        width: 100%;
        .book-list{
          width: 100%;
          .book{
            /*animation: .6s done infinite;*/
            float: left;
            width: 33%;
            height: 170px;
            padding: 10px 15px;
            position: relative;
            img{
              width: 100%;
              height: 130px;
            }
            .title{
              font-size: 15px;
            }
            .status{
              width: 22px;
              height: 22px;
              position: absolute;
              top: 0;
              right: 5px;
              font-size: 0;
              button{
                display: inline-block;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                line-height: 22px;
                text-align: center;
                font-size: 18px;
                background-color: rgba(93, 93, 93, 0.84);
                outline: none;
                border: none;
                color: white;
              }
            }
          }
        }

      }
      .make-sure{
        transition: all .4s;
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(17, 17, 17, 0.83);
        /*filter: blur(1px);*/
        .sure-box{
          width: 100%;
          height: 230px;
          background-color: whitesmoke;
          position: absolute;
          bottom: 0;
          .sure-text{
            width: 100%;
            height: 70%;
            padding: 40px 20px 10px;
            .name{
              color:red;
            }
          }
          .btn{
            width: 100%;
            height: 30%;
            display: flex;
            .btn-box{
              flex: 1;
              button{
                width: 60%;
                height: 30px;
                font-size: 16px;
                font-weight: bold;
                line-height: 30px;
                text-align: center;
              }
              .no{
                color: red;
              }
            }
          }
        }
      }
    }

    .fade-enter, .fade-leave-to {
      opacity: 0
    }
  .fade-enter{
    transform: translateY(100px);
  }
  .fade-leave-to{
    transform: translateY(200px);
  }
  .done-enter,.done-leave-to{
    animation: done 1s ;
  }
</style>
