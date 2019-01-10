<template>
  <div id="TodayNews">
    <p class="title">今日新闻推荐</p>
    <main>
      <section v-if="todayNews.auto">
        <p class="small_title">汽车</p>
        <div class="content" v-for="(item, index) in todayNews.auto" :key="index">
          <a :href="item.link" target="_blank">
            <img :src="item.picInfo[0].url" alt="img">
            <p>{{item.title}}</p>
            <p>
              <span>{{item.category}}</span>
              <span>{{item.source}}</span>
              <span>{{item.ptime}}</span>
            </p>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'TodayNews',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      todayNews: state => state.TodayNews.todayNews
    })
  },
  methods: {
    ...mapActions([
      'reqTodayNewsList'
    ]),
    getContent() {

    }
  },
  created() {
    this.reqTodayNewsList()
  }
}
</script>
<style lang="less" scoped>
  #TodayNews {
    width: 100%;
    .title {
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      line-height: 50px;
      margin: 10px 0;
    }
    main {
      .small_title {
        margin-left: 20px;
        font-size: 20px;
        border-bottom: 3px solid #333;
        padding-bottom: 6px;
        width: 42px;
      }
      .content {
        height: 100px;
        padding: 20px;
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
        img {
          float: left;
          height: 100px;
          width: 160px;
          margin-right: 20px;
          vertical-align: top;
        }
        p:nth-of-type(1) {
          font-size: 20px;
          font-weight: 700;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          line-height: 24px;
        }
        p:nth-of-type(2) {
          line-height: 20px;
          margin-top: 60px;
          span:nth-of-type(1) {
            font-size: 12px;
            padding: 2px;
            padding-bottom: 1px;
            color: #ff0000;
            border: 1px solid #ff0000;
            text-align: center;
            border-radius: 3px;
          }
          span:nth-of-type(2) {
            font-size: 14px;
          }
          span:nth-of-type(3) {
            float: right;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
</style>


