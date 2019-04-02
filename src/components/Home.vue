<template>
  <div class="Home">
    <div class="top">
      <span class="logo">企业LOGO</span>
      <el-breadcrumb class="home_Breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row class="block-col-2">
        <el-badge :value="1" :max="99" class="el_badge">
          <i class="el-icon-bell"></i>
        </el-badge>
        <el-col :span="12">
          <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="/static/images/portrait.jpg" alt="头像">
          <i>mankiodefinite</i>
        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="exit">退出</el-dropdown-item>
              <router-link to='/UserSetUp'><el-dropdown-item>个人中心</el-dropdown-item></router-link>
              <el-dropdown-item>版本{{packageJson.version}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <div class="weather" @click="toggleWeather(true)">
      当前城市：{{weatherMes.city}} <img :src="Global.weather.get(todayWeather.type)" :alt="todayWeather.type">
    </div>
    <el-container style="height: 100%; margin-top: 80px;">
      <el-aside style="height: 100%; width: 240px; overflow-x: hidden; overflow-y: auto; border-right: 1px solid #e6e6e6;">
        <el-menu text-color="#333" active-text-color="#58a8f5" :default-openeds="['1', '2', '3', '4']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <router-link to="/Banner"><el-menu-item index="1-1">轮播图</el-menu-item></router-link>
              <router-link to="/Table"><el-menu-item index="1-2">表格</el-menu-item></router-link>
              <router-link to="/Chars"><el-menu-item index="1-3">图表</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <router-link to="/Waterfall"><el-menu-item index="2-1">图片瀑布流</el-menu-item></router-link>
              <router-link to="/Notepad"><el-menu-item index="2-2">记事本</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <router-link to="/Upload"><el-menu-item index="3-1">文件上传预览</el-menu-item></router-link>
            <router-link to="/TodayNews"><el-menu-item index="3-2">今日新闻精选</el-menu-item></router-link>
            <router-link to="/TodayVideo"><el-menu-item index="3-3">今日视频精选</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-printer"></i>导航四</template>
            <router-link to="/ToolsComponent"><el-menu-item index="4-1">工具</el-menu-item></router-link>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container active-text-color="#ffd04b" class="content_container">
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-container>
    </el-container>
    <div v-if="showWeather" class="mask">
      <Weather />
    </div>
  </div>
</template>

<script>
import router from '../router/index'
import Global from '../utils/Global'
import packageJson from '../../package'
import { mapActions, mapState, mapMutations } from 'vuex'
import Weather from './Weather'

export default {
  name: 'Home',
  components: {
    Weather
  },
  data () {
    return {
      breadcrumbList: [{
        path: '/Home',
        name: '首页'
      }],
      packageJson,
      Global
    }
  },
  watch: {
    $route () {
      let item = this.$route.matched[1]
      this.toPath({path: item.path, name: Global.router.get(item.name)})
    }
  },
  computed: {
    ...mapState({
      weatherMes: state => state.Weather.weatherMes,
      todayWeather: state => state.Weather.todayWeather,
      showWeather: state => state.Weather.showWeather
    })
  },
  methods: {
    ...mapActions([
      'reqWeatherMes'
    ]),
    ...mapMutations([
      'toggleWeather'
    ]),
    handleCommand (command) {
      if (command === 'exit') {
        router.push({ name: 'Login' })
      }
    },
    toPath (item) {
      if (item) {
        this.breadcrumbList.splice(1, 1, item)
      }
    },
    changeShowWeather () {
      this.showWeather = true
    }
  },
  created () {
    let pathname = window.location.hash
    this.reqWeatherMes('北京')
    if (pathname !== '#/Home') {
      this.breadcrumbList.push({
        path: pathname.split('/')[1],
        name: Global.router.get(pathname.split('/')[1])
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @GlobalColor: #67b0ff;

  .Home {
    height: 100%;
    width: 100%;
    .top {
      height: 80px;
      width: 100%;
      background: @GlobalColor;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      line-height: 80px;
      .home_Breadcrumb {
        float: left;
        line-height: 20px;
        margin: 28px 0 0 150px;
      }
      .logo {
        color: #fff;
        font-size: 28px;
        float: left;
        padding-left: 30px;
        cursor: pointer;
      }
    }
    .content_container {
      margin-top: 50px;
      padding: 0 50px;
      overflow-x: hidden;
      overflow-y: auto;
      .el-main {
        padding-top: 0;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    .weather {
      position: absolute;
      top: 84px;
      right: 30px;
      line-height: 40px;
      color: #67b0ff;
      cursor: pointer;
      img {
        height: 20px;
        width: 20px;
        vertical-align: middle;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    height: 100%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el_badge {
    right: 200px;
    top: 6px;
    .el-icon-bell {
      float: right;
      color: #ffffff;
      font-size: 20px;
    }
  }
  .block-col-2 {
    padding-right: 10px;
    float: right;
    font-size: 16px;
    .el-dropdown-link {
      display: flex;
      cursor: pointer;
    }
    img {
      flex: 1;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-top: 20px;
    }
    i {
      flex: 1;
      font-size: 20px;
      color: #ffffff;
      margin-left: 10px;
    }
  }
  .mask {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 999;
  }
</style>
