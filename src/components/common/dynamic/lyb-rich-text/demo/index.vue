<template>
  <div class="index">
    <LybJsonExcel />
  </div>
</template>
<script>
import LybJsonExcel from "../index.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  components: { LybJsonExcel },
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>
