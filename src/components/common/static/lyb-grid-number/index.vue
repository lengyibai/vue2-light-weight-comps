<template>
  <div class="LybGridNumber" :style="{ gridArea: gridArea }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LybGridNumber",
  props: {
    //从左到右，从第几个格子开始？
    x: {
      type: Number,
      default: 0,
    },
    //从上到下，从第几个格子开始？
    y: {
      type: Number,
      default: 0,
    },
    //从左到右占用多少格
    countX: {
      type: Number,
      default: 0,
    },
    //从上到下占用多少格
    countY: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gridArea() {
      return `${this.y} / ${this.x} / ${this.y + this.countY} / ${
        this.x + this.countX
      }`;
    },
  },
};
</script>
<style scoped lang="less">
.LybGridNumber {
  width: 100%;
  height: 100%;
}
</style>
