<template>
  <div class="ParallaxVideo">
    <video v-parallaxBg autoplay src="./video/bg.mp4" loop muted></video>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.ParallaxVideo {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
