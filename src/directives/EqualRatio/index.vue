<template>
  <div class="demoFull flex">
    <h1>尝试改变浏览器窗口宽度</h1>
    <div class="box" v-equalRatio></div>
  </div>
</template>
<script>
export default {
  name: "EqualRatio",
};
</script>
<style scoped lang="less">
.demoFull {
  display: flex;
  flex-direction: column;
  h1 {
    color: #fff;
    font-size: 3vw;
  }
  .box {
    width: 35vw;
    background-color: #fff;
  }
}
</style>
