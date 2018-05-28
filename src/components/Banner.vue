<template>
  <el-container active-text-color="#ffd04b" class="content_container">
    <el-carousel type="card" :interval="4000">
      <el-carousel-item v-for="item in ImgItem" :key="item.title">
        <img :src="item.src" :alt="item.title">
        <p>{{item.desc}}</p>
      </el-carousel-item>
    </el-carousel>
  </el-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Banner',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      ImgItem: state => state.Banner.ImageData
    })
  },
  methods: {
    ...mapActions([
      'getImageData'
    ])
  },
  created() {
    this.getImageData()
  }
}
</script>
<style lang="less" scoped>
  .content_container {
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
</style>
