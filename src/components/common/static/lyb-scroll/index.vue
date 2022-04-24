<template>
  <div class="lyb-scroll">
    <div
      class="better-wrapper"
      ref="wrapper"
      :style="{ height: 'calc(100vh - ' + bottom + ' - ' + top + ')' }"
    >
      <div class="better-content">
        <slot></slot>
      </div>
    </div>
    <back-top :show="backTopShow" />
  </div>
</template>
<script>
import BackTop from "./childComp/back-top";
import BScroll from "@better-scroll/core";
import ObserveImage from "@better-scroll/observe-image";
import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveDOM);
BScroll.use(ObserveImage);
export default {
  name: "LybScroll",
  props: {
    // 顶部外边距
    top: {
      type: String,
      default: "0px",
    },
    // 底部外边距
    bottom: {
      type: String,
      default: "0px",
    },
    //是否显示回到顶部和监听坐标
    backTop: {
      type: Boolean,
      default: true,
    },
  },
  components: { BackTop },
  data() {
    return {
      scroll: null,
      backTopShow: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(".better-wrapper", {
        observeImage: true,
        observeDOM: true,
        click: true,
        useTransition: false,
        // 监听滚动
        probeType: this.backTop && 3,
      });

      this.scroll.on("scroll", (position) => {
        this.backTopShow = -position.y > this.$refs.wrapper.clientHeight;
        this.$emit("scroll", position);
      });
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped lang="less">
.lyb-scroll {
  position: relative;
  width: 100%;
  flex-shrink: 0;
  .better-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    .better-content {
      min-height: 100%;
    }
  }
}
</style>
