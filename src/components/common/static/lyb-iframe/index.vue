<template>
  <transition name="fade">
    <iframe
      v-if="show"
      class="iframe"
      ref="iframe"
      :src="link"
      marginheight="0"
      marginwidth="0"
      frameborder="0"
      scrolling="auto"
      width="100%"
      height="100%"
      title="Wikipedia page for Avocados"
    ></iframe>
  </transition>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: "https://lengyibai-vue2-function-library.netlify.app/dist/08",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  name: "LybIframe",
};
</script>
<style scoped lang="less">
/* 进入前状态 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* 进入和离开动画属性 */
.fade-leave-active,
.fade-enter-active {
  transition: all 0.25s;
}
</style>
