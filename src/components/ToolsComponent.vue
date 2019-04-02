<template>
  <div class="ToolsComponent">
    <section>
      <p class="title">二维码生成器</p>
      <el-input size="small" class="codeInput" @change="onInputcodeValue" placeholder="请输入内容"></el-input>
      <el-button size="small" @click="qrcode">生成</el-button>
      <div ref="_qrcode" class="_qrcode" id="qrcode"></div>
    </section>
    <section>
      <p class="title">Base64</p>
      <el-input size="small" class="codeInput" @change="onInputEncodeValue" placeholder="请输入内容"></el-input>
      <el-button size="small" @click="Encode">加密</el-button>
      <p class="title">{{EncodeValue}}</p>
      <el-input size="small" class="codeInput" @change="onInputDecodeValue" placeholder="请输入内容"></el-input>
      <el-button size="small" @click="Decode">解密</el-button>
      <p class="title">{{DecodeValue}}</p>
    </section>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
import { Base64 } from 'js-base64'

export default {
  name: 'ToolsComponent',
  data () {
    return {
      codeValue: '',
      QRCode: null,
      EncodeValue: '',
      DecodeValue: ''
    }
  },
  methods: {
    onInputcodeValue (value) {
      this.codeValue = value
    },
    onInputEncodeValue (value) {
      this.EncodeValue = value
    },
    onInputDecodeValue (value) {
      this.DecodeValue = value
    },
    qrcode () {
      if (this.codeValue === '') {
        this.$message('请输入要生成的内容')
        return
      }
      this.$refs._qrcode.innerHTML = ''
      this.QRCode = new QRCode('qrcode', {
        width: 132,
        height: 132,
        text: this.codeValue,
        colorDark: '#000',
        colorLight: '#fff'
      })
    },
    Encode () {
      this.EncodeValue = Base64.encode(this.EncodeValue)
    },
    Decode () {
      this.DecodeValue = Base64.decode(this.DecodeValue)
    }
  }
}
</script>
<style lang="less" scoped>
  .ToolsComponent {
    height: 100%;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    section {
      width: 100%;
      padding: 10px 0;
      border-bottom: 2px solid #ccc;
      .title {
        height: 30px;
        line-height: 30px;
        color: #666;
      }
      .codeInput {
        width: 300px;
      }
      ._qrcode {
        margin: 10px 0;
      }
    }
  }
</style>
