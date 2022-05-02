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
        <!-- Echarts图表 -->
        <div
          class="scroll-item"
          :class="{ opacity: i === index }"
          v-for="(item, index) in components"
          :key="index"
        >
          <div v-if="i === index" :is="item.is"></div>
        </div>
      </LybFullScroll>
    </div>
    <div class="tips">
      <span>绿色为简单的小组件，功能性不强</span>
      <span>蓝色为相对复杂一点的组件，功能性较强</span>
      <span>黄色为自定义指令</span>
    </div>
  </div>
</template>
<script>
import Elevator from "./childComp/Elevator.vue";
import Echarts from "@/components/common/static/lyb-echarts/demo"; //Echarts图表
import FlipBox from "@/components/common/static/lyb-flip-box/demo"; //卡片翻转
import Icon from "../components/common/static/lyb-icon/demo"; //图标
import Loading from "../components/common/static/lyb-loading/demo"; //loading
import QrCode from "../components/common/static/lyb-qr-code/demo"; //生成二维码
import Range from "../components/common/static/lyb-range/demo"; //滑动选择器
import Scroll from "../components/common/static/lyb-scroll/demo"; //移动端滚动插件
import Swipe from "../components/common/static/lyb-swipe/demo"; //swiper轮播图
import Table from "../components/common/static/lyb-table/demo"; //表格
import Video from "../components/common/static/lyb-video/demo"; //视频播放器
import GridNumber from "../components/common/static/lyb-grid-number/demo"; //Grid数字模板布局
import GridLetter from "../components/common/static/lyb-grid-letter/demo"; //Grid字母模板布局

import DragSort from "@/components/common/dynamic/lyb-drag-sort/demo"; //拖拽排序
import SelectAddress from "../components/common/dynamic/lyb-select-address/demo"; //省市区
import UploadSingle from "../components/common/dynamic/lyb-upload/demo"; //文件上传
import ValidationCountdown from "../components/common/dynamic/lyb-validation-countdown/demo"; //获取验证码按钮
import RichText from "../components/common/dynamic/lyb-rich-text/demo"; //富文本
export default {
  name: "index",
  components: {
    Elevator,
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
    GridNumber,
    GridLetter,
    DragSort,
    SelectAddress,
    UploadSingle,
    ValidationCountdown,
    RichText,
  },
  data() {
    return {
      components: [
        { name: "Echarts图表", is: "Echarts", type: "static" },
        { name: "卡片翻转", is: "FlipBox", type: "static" },
        { name: "图标", is: "Icon", type: "static" },
        { name: "loading", is: "Loading", type: "static" },
        { name: "生成二维码", is: "QrCode", type: "static" },
        { name: "滑动选择器", is: "Range", type: "static" },
        { name: "移动端滚动插件", is: "Scroll", type: "static" },
        { name: "swiper轮播图", is: "Swipe", type: "static" },
        { name: "表格", is: "Table", type: "static" },
        { name: "视频播放器", is: "Video", type: "static" },
        { name: "Grid数字模板布局", is: "GridNumber", type: "static" },
        { name: "Grid字母模板布局", is: "GridLetter", type: "static" },

        { name: "拖拽排序", is: "DragSort", type: "dynamic" },
        { name: "省市区", is: "SelectAddress", type: "dynamic" },
        { name: "文件上传", is: "UploadSingle", type: "dynamic" },
        { name: "获取验证码按钮", is: "ValidationCountdown", type: "dynamic" },
        { name: "富文本", is: "RichText", type: "dynamic" },
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
      padding: 25px;
    }
  }
  .tips {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 200px;
    height: 100%;
    justify-content: space-between;
    color: #fff;
    span {
      writing-mode: vertical-lr;
      &:nth-of-type(1) {
        color: #2ecc71;
      }
      &:nth-of-type(2) {
        color: #3498db;
      }
      &:nth-of-type(3) {
        color: #f1c40f;
      }
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
