<template>
  <div id="app">
    <router-view/>
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
  #app {
    height: 100%;
    width: 100%;
  }
</style>
