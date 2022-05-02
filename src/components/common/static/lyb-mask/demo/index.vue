<template>
  <div class="demo demoFull flex">
    <div class="btn" @click="show = true">点击显示</div>
    <LybMask v-model="show">
      <h1>这是一个蒙版，点击除这里以外的位置会关闭</h1>
    </LybMask>
  </div>
</template>
<script>
import LybMask from "../index";
export default {
  name: "demo",
  data() {
    return {
      show: false,
    };
  },
  components: { LybMask },
};
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  height: 100%;
}
</style>
