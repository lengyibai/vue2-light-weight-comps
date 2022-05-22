<template>
  <div class="demoFull flex">
    <div class="lyb" v-sweepLight></div>
  </div>
</template>
<script>
export default {
  name: "SweepLight",
};
</script>
<style scoped lang="less">
.lyb {
  width: 25vw;
  height: 25vh;
  overflow: hidden;
  background: url("@/directives/ParallaxImg/img/bg.png") no-repeat center center;
  background-size: cover;
}
</style>
