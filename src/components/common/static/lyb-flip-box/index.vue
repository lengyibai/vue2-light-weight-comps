<template>
  <div class="LybFlipBox">
    <div class="card-side card-side-front">
      <slot name="z">正面</slot>
    </div>
    <div class="card-side card-side-back">
      <slot name="f">反面</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "LybFlipBox",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.LybFlipBox {
  position: relative;
  height: 100%;
  width: 100%;
  perspective: 1000px;
  &:hover .card-side-front {
    transform: rotateY(-180deg);
  }
  &:hover .card-side-back {
    transform: rotateY(0deg);
  }

  .card-side {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: all 0.5s ease;
    backface-visibility: hidden;
  }

  .card-side-back {
    transform: rotateY(180deg);
  }
}
</style>
