<template>
  <div class="home_container">
    <el-container active-text-color="#ffd04b" class="content_container">
      <el-carousel trigger="click" type="card" :interval="4000">
        <el-carousel-item v-for="item in ImgItem" :key="item.title">
          <img :src="item.src" :alt="item.title">
          <p>{{item.desc}}</p>
        </el-carousel-item>
      </el-carousel>
    </el-container>
    <div class="banner_card">
      <div>
        <i class="icon iconfont">&#xe600;</i>
        <p>
          <section>location</section>
          <section>Xinghai Square</section>
        </p>
      </div>
      <div @click="sendEmail()">
        <i class="icon iconfont">&#xe67d;</i>
        <p>
          <section>email</section>
          <section>browse counts 1238</section>
        </p>
      </div>
      <div @click="getUserMessage">
        <i class="icon iconfont">&#xe607;</i>
        <p>
          <section>user</section>
          <section>user description</section>
        </p>
      </div>
      <div @click="toGitHub">
        <i class="icon iconfont">&#xe828;</i>
        <p>
          <section>Warehouse</section>
          <section>coding description</section>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Banner',
  data () {
    return {
      options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    }
  },
  computed: {
    ...mapState({
      ImgItem: state => state.Banner.ImageData,
      userName: state => state.Login.userName
    })
  },
  methods: {
    ...mapActions([
      'getImageData'
    ]),
    sendEmail () {
      window.location = 'mailto: maitcast@163.com'
    },
    getUserMessage () {
      this.$alert(`当前的用户为${this.userName}`, '提示', {})
    },
    toGitHub () {
      window.open('https://github.com/')
    }
  },
  created () {
    this.getImageData()
  }
}
</script>
<style lang="less" scoped>
  .home_container {
    height: 100%;
    width: 100%;
    .content_container {
      height: 350px;
      .el-main {
        padding-top: 0;
      }
      img {
        height: 100%;
        width: 100%;
      }
      p {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.3);
        color: #ffffff;
        padding: 0 10px;
        box-sizing: border-box;
        font-weight: 100;
      }
      p:hover{
        color: #2dbeff;
      }
    }
    .banner_card {
      height: 100px;
      width: 100%;
      display: flex;
      margin-top: 40px;
      div {
        flex: 1;
        height: 120px;
        border-radius: 10px;
        margin: 0 20px;
        line-height: 80px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        cursor: pointer;
        i {
          flex: 0.3;
          color: #ffffff;
          font-size: 40px;
        }
        p {
          flex: 0.7;
          color: #ffffff;
          line-height: 40px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          section {
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
        }
      }
      div:nth-of-type(1) {
        background: #92e8ec;
      }
      div:nth-of-type(1):hover {
        background: rgba(146, 232, 236, 0.7);
      }
      div:nth-of-type(2) {
        background: #5de75a;
      }
      div:nth-of-type(2):hover {
        background: rgba(93, 231, 90, 0.7);
      }
      div:nth-of-type(3) {
        background: #ef5752;
      }
      div:nth-of-type(3):hover {
        background: rgba(239, 87, 82, 0.7);
      }
      div:nth-of-type(4) {
        background: #e380ec;
      }
      div:nth-of-type(4):hover {
        background: rgba(227, 128, 236, 0.7);
      }
    }
  }

</style>
