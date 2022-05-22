-vue
<template>
  <div class="demo demoFull flex">
    <h1>试着缩小浏览器宽度</h1>
    <transition-group
      style="display: grid; width: 75%; height: 75%; grid-gap: 5px"
    >
      <!--
      x、countX、y、countY是固定写法，看得懂可以自行修改，但推荐当前写法
     -->
      <LybGridNumber
        class="LybGridNumber"
        v-for="(item, index) in box"
        :x="item[0]"
        :countX="item[1]"
        :y="item[2]"
        :countY="item[3]"
        :key="index + '1'"
        >{{ index + 1 }}</LybGridNumber
      >
    </transition-group>
  </div>
</template>
<script>
/**
 * 数字模板虽然可读性不强，但它直接修改的子元素属性，能触发子元素动画
 * 字母模板虽然看着更直观、可读性强，但字母模板属于父元素属性，修改并不会触发子元素的响应式动画
 * 推荐：当布局定死不会改变或不需要动画时，可以考虑使用字母模板
 */
export default {
  name: "demo",
  props: {},
  data() {
    return {
      boxs: {
        /**
         * 释义：
         * 数组元素第一个和第二个，代表横向第几格开始，并占用了多少格
         * 数组元素第二个和第四个，代表纵向第几格开始，并占用了多少格
         */
        500: [
          [1, 1, 1, 2],
          [1, 2, 3, 1],
          [1, 3, 4, 1],
          [2, 2, 1, 1],
          [3, 1, 3, 1],
          [3, 1, 2, 1],
          [2, 1, 2, 1],
        ],
        800: [
          [1, 1, 1, 2],
          [2, 1, 1, 3],
          [1, 1, 3, 1],
          [1, 3, 4, 1],
          [4, 1, 2, 3],
          [3, 2, 1, 1],
          [3, 1, 2, 2],
        ],
        1200: [
          [1, 4, 1, 1],
          [5, 2, 1, 2],
          [7, 2, 1, 1],
          [1, 2, 2, 2],
          [3, 2, 2, 1],
          [3, 6, 3, 1],
          [7, 2, 2, 1],
        ],
      },
      /* 用于存储当前的布局 */
      box: [],
    };
  },
  mounted() {
    this.fn();
    window.addEventListener(
      "resize",
      function () {
        this.fn();
      }.bind(this),
    );
  },
  methods: {
    fn() {
      const width = document.documentElement.clientWidth;
      Object.keys(this.boxs).forEach((item) => {
        if (width > Number(item)) {
          this.box = this.boxs[item];
        } else if (width < 500) {
          this.box = [
            [1, 1, 1, 3],
            [1, 4, 4, 1],
            [5, 2, 1, 3],
            [3, 1, 3, 1],
            [2, 1, 1, 2],
            [2, 3, 2, 1],
            [4, 2, 1, 2],
            [3, 2, 1, 1],
          ];
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  flex-direction: column;
  h1 {
    color: #fff;
  }
  background-color: #000;
  .LybGridNumber {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    color: #fff;
    font-size: 50px;
    font-family: "黑体";
    transition: all 3s;
  }
}
</style>
