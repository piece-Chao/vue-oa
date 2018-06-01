<template>
  <div class="home_chars">
    <div class="changeTypes" @click="changeType">切换图表</div>
    <ve-chart :data="chartData" :settings="chartSettings"></ve-chart>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Chars',
  data () {
    return {
      chartSettings: { type: 'histogram' },
      index: 0,
      typeArr: ['histogram', 'line', 'pie']
    }
  },
  computed: {
    ...mapState({
      chartData: state => state.Chars.chartData
    })
  },
  methods: {
    ...mapActions([
      'getCharsRowData'
    ]),
    changeType () {
      this.index++
      if (this.index >= this.typeArr.length) {
        this.index = 0
      }
      this.chartSettings = { type: this.typeArr[this.index] }
    }
  },
  created () {
    this.getCharsRowData()
  }
}
</script>
<style lang="less" scoped>
  .home_chars {
    height: 500px;
    width: 100%;
    margin-top: 20px;
    .changeTypes {
      margin-bottom: 50px;
      cursor: pointer;
      padding: 10px;
      border: 1px solid #3ca4ff;
      border-radius: 4px;
      width: 80px;
      text-align: center;
      color: #3ca4ff;
    }
  }
</style>
