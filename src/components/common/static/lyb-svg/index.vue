<template>
  <span
    class="LybSvg"
    v-html="svg"
    :style="{
      width: size,
      height: size,
      margin: `${top} ${right} ${bottom} ${left}`,
      color: color,
    }"
    :title="title"
    @mouseenter="enter($event.target)"
    @mouseleave="leave($event.target)"
    @mousedown="down($event.target)"
    @mouseup="up($event.target)"
  ></span>
</template>
<script>
import icon from "./svg/icon.js";
export default {
  name: "LybSvg",
  props: {
    // SVG代码
    svg: {
      type: String,
      default: icon.love,
    },
    color: {
      type: String,
      default: "",
    },
    enterColor: {
      type: String,
      default: "",
    },
    downColor: {
      type: String,
      default: "",
    },
    //悬浮描述
    title: {
      type: String,
      default: "",
    },
    //图片等比宽高
    size: {
      type: String,
      default: "25px",
    },
    // 以下为外边距
    top: {
      type: String,
      default: "0px",
    },
    right: {
      type: String,
      default: "0px",
    },
    bottom: {
      type: String,
      default: "0px",
    },
    left: {
      type: String,
      default: "0px",
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    icon() {
      return icon;
    },
  },
  methods: {
    enter(el) {
      el.style.color = this.enterColor;
    },
    leave(el) {
      el.style.color = this.color;
    },
    up(el) {
      if (el.tagName === "svg") {
        el.parentNode.style.color = this.enterColor;
      } else {
        el.parentNode.parentNode.style.color = this.enterColor;
      }
    },
    down(el) {
      if (el.tagName === "svg") {
        el.parentNode.style.color = this.downColor;
      } else {
        el.parentNode.parentNode.style.color = this.downColor;
      }
    },
  },
};
</script>
<style scoped lang="less">
.LybSvg {
  position: relative;
  background: no-repeat center center;
  background-size: contain;
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    transition: all 0.1s;
  }
}
</style>
