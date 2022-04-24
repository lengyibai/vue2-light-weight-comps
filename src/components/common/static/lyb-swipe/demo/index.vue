<template>
  <div class="demo">
    <div class="swiper">
      <lybSwipe :isMultiple="true" />
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #222;
  .swiper {
    position: relative;
    height: 500px;
  }
}
</style>
