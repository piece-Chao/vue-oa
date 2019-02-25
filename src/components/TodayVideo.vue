<template>
  <div class="Community_container">
    <p class="Community_title" v-if="(todayVideoList.length > 0)&& (todayVideoList[0].type === 'textCard')">{{todayVideoList[0].data.text}}</p>
    <div class="Community_content" v-if="index >= 1 && item.data.content && item.data.content.data && item.data.content.data.playUrl" v-for="(item, index) in todayVideoList" :key="index">
      <video controls="controls" v-if="item.data.content" :src="item.data.content.data.playUrl"></video>
      <p>{{item.data.content.data.description}}</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'reqTodayVideoList',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      todayVideoList: state => state.TodayVideo.todayVideoList
    })
  },
  methods: {
    ...mapActions([
      'reqTodayVideoList'
    ])
  },
  created () {
    this.reqTodayVideoList()
  }
}
</script>
<style lang="less" scoped>
  .Community_container {
    margin: 50px auto;
    width: 100%;
    .Community_title {
      text-align: center;
      font-size: 20px;
    }
    .Community_content {
      height: 250px;
      width: 300px;
      display: inline-block;
      margin: 20px;
      video {
        height: 200px;
        width: 300px;
      }
      p {
        line-height: 20px;
        font-size: 14px;
        color: #666;
        margin-top: 6px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
  }
</style>
