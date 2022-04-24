<template>
  <div
    class="index"
    :style="{
      width: `${size}`,
      height: `${size}`,
      margin: `${top} ${right} ${bottom} ${left}`,
    }"
    :title="title"
  >
    <div
      class="index-hover"
      :style="{
        backgroundImage: `url(${imgUrlHover})`,
      }"
    ></div>
    <div
      class="index-default"
      :style="{
        backgroundImage: `url(${imgUrl})`,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "LybIcon",
  props: {
    //需要使用 require 引入图片
    imgUrl: {
      default: require("./img/smile-gray.png"),
    },
    // 悬浮到图标上面的图片，不需要则null
    imgUrlHover: {
      default: null,
    },
    //悬浮描述
    title: {
      type: String,
      default: "",
    },
    //图片等比宽高，不带单位
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
};
</script>
<style scoped lang="less">
.index {
  position: relative;
  .index-default,
  .index-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    z-index: 999;
  }
}
.index:hover .index-hover {
  z-index: 1000;
}
</style>
