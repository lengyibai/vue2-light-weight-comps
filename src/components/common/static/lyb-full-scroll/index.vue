<template>
  <div
    class="LybFullScroll"
    :style="{
      display: direction === 'x' ? 'flex' : 'block',
      transition: `all ${this.time}s`,
    }"
    ref="LybFullScroll"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      default: 0,
    },
    time: {
      type: Number,
      default: 0.75,
    },
    direction: {
      type: String,
      default: "y",
    },
  },
  name: "LybFullScroll",
  data() {
    return {
      i: 0,
    };
  },
  watch: {
    page: {
      handler(v) {
        this.change(v - 1);
      },
      immediate: true,
    },
  },
  mounted() {
    const father = this.$refs.LybFullScroll;
    let direction = this.direction === "y"; //是否为纵向滚动
    let scroll = true; //是否滚动
    const sonCount = father.querySelectorAll(".scroll-item").length; //页面数量
    /* 防抖 */
    const fn = this.debounce(
      function (e) {
        this.$emit("start-scroll", this.i);
        father.style.transition = `all ${this.time}s`;
        if (!scroll) return;
        scroll = false;
        e.wheelDelta < 0 && this.i < sonCount - 1
          ? this.i++
          : e.wheelDelta > 0 && this.i > 0
          ? this.i--
          : "";
        father.style[direction ? "top" : "left"] =
          -this.i * (direction ? father.offsetHeight : father.offsetWidth) +
          "px";
        setTimeout(() => {
          scroll = true;
          this.$emit("end-scroll", this.i);
          this.$emit("input", this.i);
        }, this.time * 750);
      }.bind(this),
      10,
    );
    father.addEventListener("mousewheel", fn);
    window.addEventListener("resize", () => {
      father.style.transition = "all 0s";
      this.change(this.page);
    });
  },
  methods: {
    debounce(fn, delay, mtm = false) {
      if (mtm) {
        let timer;
        return function () {
          let context = this;
          let args = arguments;
          if (timer) clearTimeout(timer);
          let callNow = !timer;
          timer = setTimeout(() => {
            timer = null;
          }, delay);
          if (callNow) fn.apply(context, args);
        };
      } else {
        return function (args) {
          let that = this;
          let _args = args;
          clearTimeout(fn.id);
          fn.id = setTimeout(function () {
            fn.call(that, _args);
          }, delay);
        };
      }
    },
    change(i) {
      if (i === -1) i = 0;
      this.$nextTick(() => {
        const father = this.$refs.LybFullScroll;
        this.i = i;
        let direction = this.direction === "y";
        try {
          father.style[direction ? "top" : "left"] =
            -i * (direction ? father.offsetHeight : father.offsetWidth) + "px";
        } catch (error) {
          /*  */
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
.LybFullScroll {
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .scroll-item {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
