<template>
  <div class="ParallaxImg">
    <img v-parallaxBg src="./img/bg.png" />
  </div>
</template>
<script>
export default {
  name: "ParallaxImg",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.ParallaxImg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
