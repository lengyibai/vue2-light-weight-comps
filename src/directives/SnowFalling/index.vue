<template>
  <div class="demoFull demo" v-snowFalling></div>
</template>
<script>
export default {
  name: "snowFalling",
};
</script>
<style scoped lang="less">
.demo {
  background-size: cover;
  background: url(./bg.png) no-repeat center center;
  overflow: hidden;
}
</style>
