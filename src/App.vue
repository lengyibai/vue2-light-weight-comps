<template>
  <div id="app">
    <index />
    <a
      v-textHoverColor
      class="lyb"
      href="https://gitee.com/lengyibai"
      target="_blank"
      >@冷弋白</a
    >
  </div>
</template>

<script>
import index from "./views";
export default {
  name: "App",
  components: { index },
};
</script>
<style lang="less">
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  .lyb {
    position: fixed;
    right: 0;
    bottom: 0;
    color: #3498db;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
