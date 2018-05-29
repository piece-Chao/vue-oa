<template>
  <div class="login">
    <div class="login_backGround">
      <div class="login_content">
        <p class="title">登录</p>
        <el-input
          class="userName"
          placeholder="请输入内容"
          v-model="userName">
        </el-input>
        <el-input
          class="pwd"
          placeholder="请输入内容"
          type="password"
          v-model="pwd">
        </el-input>
        <el-button @click.native="login" class="login_button" type="primary">登 录</el-button>
        <p class="border"></p>
        <div class="third-party_login">
            <img src="/static/images/WeChat.png" alt="微信登录">
            <img src="/static/images/qq.png" alt="qq登录">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../utils/pictureGround.js'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      userName: 'admin',
      pwd: '123456'
    }
  },
  methods: {
    ...mapActions([
      'user_login'
    ]),
    login () {
      this.user_login({userName: this.userName, pwd: this.pwd})
    },
    initAniCanvas () {
      particleground (this.$el.querySelector('.login_backGround'), {
        dotColor: '#0e7085',
        lineColor: '#0e7085',
        parallaxMultiplier: 100,
        lineWidth: 0.1,
        height: '100%',
        width: '100%',
        particleRadius: 2
      })
    }
  },
  mounted () {
    this.initAniCanvas()
  }
}
</script>
<style lang="less" scoped>
  .login {
    height: 100%;
    width: 100%;
    .login_backGround {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #050644;
      .login_content {
        .title {
          font-size: 22px;
          margin: 20px 0;
        }
        .userName,
        .pwd {
          margin-bottom:20px;
        }
        .login_button {
          width: 100%;
          font-weight: 100;
          font-size: 18px;
          margin-top: 20px;
        }
        .border {
          height: 1px;
          width: 100%;
          background: #cccccc;
          margin-top: 20px;
        }
        .third-party_login {
          width: 100%;
          padding: 10px 0;
          box-sizing: border-box;
          img {
            width: 40px;
            height: 40px;
            padding: 6px;
            border: 1px solid #32a3cc;
            border-radius: 50%;
          }
          img:nth-of-type(1) {
            float: left;
            transform: translateX(70%);
          }
          img:nth-of-type(2) {
            float: right;
            transform: translateX(-70%);
          }
        }
        height: 350px;
        width: 350px;
        padding: 0 30px;
        box-sizing: border-box;
        background: #fffff9;
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
