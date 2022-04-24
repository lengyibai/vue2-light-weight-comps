<template>
  <div class="index">
    <Elevator
      class="Elevator"
      @change="change"
      :index="i"
      :components="components"
    />
    <div class="FullScroll">
      <LybFullScroll direction="x" @end-scroll="endScroll" v-model="i">
        <div class="scroll-item">
          <!-- 拖拽排序 -->
          <DragSort />
        </div>
        <!-- Echarts图表 -->
        <div class="scroll-item">
          <Echarts />
        </div>
        <!-- 卡片翻转 -->
        <div class="scroll-item flex">
          <FlipBox />
        </div>
        <!-- 图标 -->
        <div class="scroll-item flex">
          <Icon />
        </div>
        <!-- loading -->
        <div class="scroll-item flex">
          <Loading />
        </div>
        <!-- 生成二维码 -->
        <div class="scroll-item flex">
          <QrCode />
        </div>
        <!-- 滑动选择器 -->
        <div class="scroll-item flex">
          <Range />
        </div>
        <!-- 移动端滚动插件 -->
        <div class="scroll-item flex">
          <Scroll />
        </div>
        <!-- swiper轮播图 -->
        <div class="scroll-item flex">
          <Swipe />
        </div>
        <!-- swiper轮播图 -->
        <div class="scroll-item flex">
          <Table />
        </div>
        <!-- 视频播放器 -->
        <div class="scroll-item flex">
          <Video />
        </div>
        <!-- 导出表格 -->
        <div class="scroll-item flex">
          <LybJsonExcel />
        </div>
      </LybFullScroll>
    </div>
  </div>
</template>
<script>
import Elevator from "./childComp/Elevator.vue";
/* 拖拽排序 */
import DragSort from "@/components/common/static/lyb-drag-sort/demo";
/* Echarts图表 */
import Echarts from "@/components/common/static/lyb-echarts/demo";
/* 卡片翻转 */
import FlipBox from "@/components/common/static/lyb-flip-box/demo";
/* 图标 */
import Icon from "../components/common/static/lyb-icon/demo";
/* loading */
import Loading from "../components/common/static/lyb-loading/demo";
/* 生成二维码  */
import QrCode from "../components/common/static/lyb-qr-code/demo";
/* 滑动选择器 */
import Range from "../components/common/static/lyb-range/demo";
/* 移动端滚动插件 */
import Scroll from "../components/common/static/lyb-scroll/demo";
/* swiper轮播图 */
import Swipe from "../components/common/static/lyb-swipe/demo";
/* 表格 */
import Table from "../components/common/static/lyb-table/demo";
/* 视频播放器 */
import Video from "../components/common/static/lyb-video/demo";
export default {
  name: "index",
  components: {
    Elevator,
    DragSort,
    Echarts,
    FlipBox,
    Icon,
    Loading,
    QrCode,
    Range,
    Scroll,
    Swipe,
    Table,
    Video,
  },
  data() {
    return {
      components: [
        { name: "拖拽排序" },
        { name: "Echarts图表" },
        { name: "卡片翻转" },
        { name: "图标" },
        { name: "loading" },
        { name: "生成二维码" },
        { name: "滑动选择器" },
        { name: "移动端滚动插件" },
        { name: "swiper轮播图" },
        { name: "表格" },
        { name: "视频播放器" },
        { name: "导出表格" },
      ],
      i: 0,
    };
  },
  methods: {
    //#####··········基础结构··········#####//
    //####········滚动一页结束触发········####//
    endScroll(i) {
      this.i = i;
    },

    //####········点击触发········####//
    change(i) {
      this.i = i;
    },
  },
};
</script>
<style scoped lang="less">
.index {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  .Elevator {
    width: 200px;
  }
  .FullScroll {
    position: relative;
    flex: 1;
    height: 100%;
    overflow: hidden;
    .scroll-item {
      padding: 25px;
    }
  }
}

.bg-white {
  background-color: #fff;
}
</style>
