<template>
  <div class="demoFull flex">
    <div class="box" v-downDrag></div>
  </div>
</template>
<script>
export default {
  name: "DownDrag",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.box {
  position: absolute; //必须加绝对定位才能拖动
  width: 25vw;
  height: 25vw;
  background-color: #fff;
}
</style>
