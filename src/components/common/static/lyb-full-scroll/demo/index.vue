<template>
  <div class="demoFull flex">
    <LybFullScroll direction="y">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LybFullScroll>
  </div>
</template>
<script>
import LybFullScroll from "@/components/common/static/lyb-full-scroll/index.vue";
export default {
  name: "index",
  components: { LybFullScroll },
};
</script>
<style scoped lang="less">
.demoFull {
  overflow: hidden;
  .scroll-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50vh;
    color: #fff;
  }
}
</style>
