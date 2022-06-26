<!-- 单选多tab栏 -->
<template>
  <div class="MultiColumn">
    <div class="tab">
      <div
        class="tab-item"
        :class="{ active: currentIndex == index }"
        v-for="(item, index) in tabName"
        :key="index"
        @click="tabClick(index)"
      >
        {{ item }}
      </div>
      <div
        class="foil"
        :style="{
          left: (currentIndex / tabName.length) * 100 + '%',
          width: 100 / tabName.length + '%',
        }"
      ></div>
    </div>
    <div class="slide" ref="slide">
      <single-column class="slide-item"></single-column>
      <single-column class="slide-item" v-if="cache[1]"></single-column>
      <single-column class="slide-item" v-if="cache[2]"></single-column>
    </div>
  </div>
</template>
<script>
////···············公共组件···············////
/* 注意：目前用于只是用于测试，所以使用同一个组件，实际开发每栏的内容都不同，所以需要引入三个不一样的上拉刷新下拉加载组件 */
import SingleColumn from "./childComp"; //实际上就是用的单栏的demo，只是顶部多了导航栏，需要改top高度
export default {
  props: {},
  data() {
    return {
      tabName: ["one", "two", "three"],
      currentIndex: 0,
      // tab栏标签页懒加载
      cache: [true, false, false],
    };
  },
  components: {
    SingleColumn,
  },
  methods: {
    //#####··········tab栏点击··········#####//
    tabClick(index) {
      // tab栏标签页懒加载
      this.cache[index] = true;
      this.currentIndex = index;
      this.$refs.slide.style.transform = `translateX(-${index * 100}%)`;
    },
  },
};
</script>
<style scoped lang="less">
.MultiColumn {
  width: 100%;
  height: 100%;
  overflow: hidden;
  // tab栏整体
  .tab {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    height: 50px;
    // tab栏标签
    .tab-item {
      flex: 1;
      font-size: 25px;
      text-align: center;
      line-height: 50px;
    }
    .foil {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 0.25s;
      &::before {
        content: "";
        position: absolute;
        width: 25%;
        height: 3px;
        background-color: #000;
        bottom: 5px;
      }
    }
  }
  // 滑动位置
  .slide {
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    transition: all 0.25s;
    .slide-item {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
    }
  }
}
.active {
  transition: all 0.1s;
  font-size: 30px !important;
  color: #2980b9 !important;
}
</style>
