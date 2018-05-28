<template>
  <div class="home_chars">
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'Chars',
    data() {
      return {
        chartSettings: {}
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
      ])
    },
    created() {
      this.getCharsRowData()
    }
  }
</script>
<style lang="less" scoped>
  .home_chars {
    height: 500px;
    width: 100%;
  }
</style>
