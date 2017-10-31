<template>
    <div class='app'>
      <div class="header">
        <div class="titleImg"><img src="/static/head.jpg" alt=""></div>
      </div>
      <div class="block"></div>
      <div class="body">
        <ul>
          <li class="setting">
            <div class="setting-box">
              <span class="icon glyphicon glyphicon-film ticket"></span><span class="text">余额 500 春卷　</span><span class="right">立即充值</span>
            </div>
          </li>
          <li class="setting">
            <div class="setting-box">
            <span class="icon glyphicon glyphicon-king king"></span><span class="text">我的包月</span><span class="right-hig glyphicon glyphicon-chevron-right"></span><span class="right-text">包月书在线免费读</span>
            </div>
          </li>
          <li class="setting">
            <div class="setting-box">
            <span class="icon glyphicon glyphicon-yen money"></span><span class="text">充值记录</span><span class="right-hig glyphicon glyphicon-chevron-right"></span>
            </div>
          </li>
          <li class="setting">
            <div class="setting-box">
            <span class="icon glyphicon glyphicon-folder-close write"></span><span class="text">购买记录</span><span class="right-hig glyphicon glyphicon-chevron-right"></span></div></li>
          <li class="setting">
            <div class="setting-box">
            <span class="icon glyphicon glyphicon-eye-open history"></span><span class="text">浏览记录</span><span class="right-hig glyphicon glyphicon-chevron-right"></span>
            </div>
        </li>
          <li class="setting"><div class="setting-box"><span class="icon glyphicon glyphicon-cog set"></span><span class="text">设置</span><span class="right-hig glyphicon glyphicon-chevron-right"></span></div></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }

    }
</script>

<style lang="less" scoped rel="stylesheet/less">
    .app {
      width: 100%;
      .header{
        position: relative;
        width: 100%;
        height: 250px;
        background-color: rgba(255, 0, 0, 0.72);
        .titleImg{
          width: 100px;
          height: 100px;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          img{
            border-radius: 50%;
            display: block;
            width: 100%;
            height: 100%;


          }
        }
      }
      .block{
        width: 100%;
        height: 10px;
        background-color: #e7e7e7;
      }
      .body{
        position: absolute;
        top:260px;
        bottom: 50px;
        width: 100%;
        ul{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .setting {
            position: relative;
            overflow: hidden;
            width: 100%;
            flex: 1;
            border-top: 1px solid #ccc;
            .setting-box {
              padding: 0 10px;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              width: 100%;
              height: 36px;
              margin: auto;
            span {
              display: inline-block;
              height: 36px;
              line-height: 30px;
              font-size: 18px;
              margin: auto;
            }
            .icon {
              width: 36px;
              height: 36px;
              border-radius: 50%;
            }
            .ticket, .king, .set, .money, .history, .write {
              color: white;
              background-color: red;
              text-align: center;
              line-height: 36px;
            }
            .king {
              background-color: rgba(199, 147, 0, 0.87);
            }
            .set {
              background-color: purple;
            }
            .money {
              background-color: orange;
            }
            .history {
              background-color: #17a664;
            }
            .write {
              background-color: #00b900;
            }
            .text {
              padding-left: 10px;
            }
            .right {
              padding: 0 10px;
              border-radius: 18px;
              border: 1px solid #ff8c1a;
              color: #ff8c1a;
              font-weight: bold;
              float: right;
            }
            .right-hig {
              float: right;
            }
            .right-text {
              height: 36px;
              line-height: 36px;
              font-size: 13px;
              color: #ccc;
              float: right;
              margin-right: 10px;
            }
          }
            }
          }
        }
      }

</style>
