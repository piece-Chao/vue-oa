<template>
  <div id="app">
    <transition name="el-fade-in-linear" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "/assets/style/ResetElement.css";
  @import "/assets/style/Reset.css";
  @import "/assets/font/iconfont.css";
  #app {
    height: 100%;
    width: 100%;
  }
</style>
