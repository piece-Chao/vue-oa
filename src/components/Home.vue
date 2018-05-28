<template>
  <div class="Home">
    <div class="top">
      <span>企业LOGO</span>
      <span>用户</span>
    </div>
    <el-container>
      <el-aside>
        <el-menu text-color="#333" active-text-color="#58a8f5" :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <router-link to="/Banner"><el-menu-item index="1-1">轮播图</el-menu-item></router-link>
              <router-link to="/Table"><el-menu-item index="1-2">表格</el-menu-item></router-link>
            <router-link to="/Chars"><el-menu-item index="1-3">图表</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container active-text-color="#ffd04b" class="content_container">
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
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
      span:nth-of-type(1) {
        color: #fff;
        font-size: 28px;
        float: left;
        padding-left: 30px;
        cursor: pointer;
      }
      span:nth-of-type(2) {
        color: #fff;
        font-size: 28px;
        float: right;
        padding-right: 30px;
        cursor: pointer;
      }
    }
    .content_container {
      margin-top: 0;
      padding: 0 50px;
      .el-main {
        padding-top: 0;
      }
      img {
        height: 100%;
        width: 100%;
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
</style>
