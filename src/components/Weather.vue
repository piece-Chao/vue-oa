<template>
    <div class="Weather">
      <p class="close">
        <span @click="toggleWeather(false)">✘</span>
      </p>
      <div class="main">
        <el-input placeholder="请输入内容" v-model="input">
          <el-select disabled="disabled" style="width: 80px" :value="'天气'" slot="prepend"></el-select>
          <el-button @click="searchWeather" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <div class="title">
          <span>地点：{{weatherMes.city}}</span>，
          <span>当前温度：{{weatherMes.wendu}}℃</span>
        </div>
        <div class="_table">
          <el-table
            :data="weatherMes.forecast"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="fengli"
              label="风力">
            </el-table-column>
            <el-table-column
              prop="fengxiang"
              label="风向">
            </el-table-column>
            <el-table-column
              prop="high"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="low"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="type"
              label="天气">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      weatherMes: state => state.Weather.weatherMes
    })
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions([
      'reqWeatherMes'
    ]),
    ...mapMutations([
      'toggleWeather'
    ]),
    searchWeather () {
      if (this.input === '') {
        this.$message('请输入地点')
        return
      }
      this.reqWeatherMes(this.input)
    }
  }
}
</script>
<style lang="less" scoped>
.Weather {
  width: 80%;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  .main {
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  ._table {
    margin-top: 10px;
    border: 1px solid #ddd;
    transition: all 0.5s;
  }
  ._table:hover {
    box-shadow: 0px 0px 4px 4px #eee;
  }
  .title {
    line-height: 30px;
    margin: 10px 0 0 10px;
  }
  .close {
    text-align: right;
    padding: 12px 12px 0;
    font-size: 24px;
    span {
      cursor: pointer;
    }
  }
}
</style>
