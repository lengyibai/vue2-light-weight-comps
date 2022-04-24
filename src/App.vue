<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less">
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
