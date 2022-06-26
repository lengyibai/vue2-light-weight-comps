<template>
  <div class="demo demoFull flex">
    <div class="WaveDiffuse" v-waveDiffuse></div>
  </div>
</template>
<script>
export default {
  name: "WaveDiffuse",
};
</script>
<style scoped lang="less">
.WaveDiffuse {
  width: 35vw;
  height: 35vw;
  border: 3px solid #fff;
}
</style>
