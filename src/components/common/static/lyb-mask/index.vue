<template>
  <transition name="fade">
    <div class="LybMask" v-show="value" @mouseup="hide">
      <slot>这是一个蒙版</slot>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  name: "LybMask",
  methods: {
    hide(e) {
      if (e.target._prevClass === "LybMask") {
        this.$emit("input", false);
      }
    },
  },
};
</script>
<style scoped lang="less">
.LybMask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
</style>
