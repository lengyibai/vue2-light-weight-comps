<template>
  <div class="LybSprites"></div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
  },
  name: "LybSprites",
  methods: {},
};
</script>
<style scoped lang="less">
.LybSprites {
  width: 100px;
  height: 100px;
  background: url("./img/sprites.png") no-repeat 0px 200px;
}
</style>
