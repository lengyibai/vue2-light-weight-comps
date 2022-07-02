<template>
  <div class="demoFull flex">
    <div
      class="lyb bgImg"
      v-maskGradient="{
        color: 'rgba(0, 0, 0, 0.75)',
        num1: '0%',
        num2: '50%',
      }"
    >
      <img src="http://lengyibai.gitee.io/img-bed/img/lyb.png" alt="" />
      <span>这里是冷弋(yi)白</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MaskGradient",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.demoFull {
  .lyb {
    width: clamp(0px, 25vw, 90vh);
    height: clamp(0px, 25vw, 90vh);
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      width: 100%;
      font-size: 3vw;
      color: #fff;
      bottom: 0.25em;
      z-index: 1;
      text-align: center;
    }
  }
}
</style>
