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
        <div class="scroll-item" :class="{ opacity: i === 0 }">
          <!-- 拖拽排序 -->
          <DragSort v-if="i === 0" />
        </div>
        <!-- Echarts图表 -->
        <div class="scroll-item" :class="{ opacity: i === 1 }">
          <Echarts v-if="i === 1" />
        </div>
        <!-- 卡片翻转 -->
        <div class="scroll-item" :class="{ opacity: i === 2 }">
          <FlipBox v-if="i === 2" />
        </div>
        <!-- 图标 -->
        <div class="scroll-item" :class="{ opacity: i === 3 }">
          <Icon v-if="i === 3" />
        </div>
        <!-- loading -->
        <div class="scroll-item" :class="{ opacity: i === 4 }">
          <Loading v-if="i === 4" />
        </div>
        <!-- 生成二维码 -->
        <div class="scroll-item" :class="{ opacity: i === 5 }">
          <QrCode v-if="i === 5" />
        </div>
        <!-- 滑动选择器 -->
        <div class="scroll-item" :class="{ opacity: i === 6 }">
          <Range v-if="i === 6" />
        </div>
        <!-- 移动端滚动插件 -->
        <div class="scroll-item" :class="{ opacity: i === 7 }">
          <Scroll v-if="i === 7" />
        </div>
        <!-- swiper轮播图 -->
        <div class="scroll-item" :class="{ opacity: i === 8 }">
          <Swipe v-if="i === 8" />
        </div>
        <!-- swiper轮播图 -->
        <div class="scroll-item" :class="{ opacity: i === 9 }">
          <Table v-if="i === 9" />
        </div>
        <!-- 视频播放器 -->
        <div class="scroll-item" :class="{ opacity: i === 10 }">
          <Video v-if="i === 10" />
        </div>
        <!-- 省市区 -->
        <div class="scroll-item" :class="{ opacity: i === 11 }">
          <SelectAddress v-if="i === 11" />
        </div>
        <!-- 文件上传 -->
        <div class="scroll-item" :class="{ opacity: i === 12 }">
          <UploadSingle v-if="i === 12" />
        </div>
        <!-- 获取验证码按钮 -->
        <div class="scroll-item" :class="{ opacity: i === 13 }">
          <ValidationCountdown v-if="i === 13" />
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
/* 省市区 */
import SelectAddress from "../components/common/dynamic/lyb-select-address/demo";
/* 文件上传 */
import UploadSingle from "../components/common/dynamic/lyb-upload/demo";
/* 获取验证码按钮 */
import ValidationCountdown from "../components/common/dynamic/lyb-validation-countdown/demo";
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
    SelectAddress,
    UploadSingle,
    ValidationCountdown,
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
        { name: "省市区" },
        { name: "文件上传" },
        { name: "获取验证码按钮" },
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
      opacity: 0;
      transition: all 0.5s;
    }
  }
}

.bg-white {
  background-color: #fff;
}

.opacity {
  opacity: 1 !important;
}
</style>
