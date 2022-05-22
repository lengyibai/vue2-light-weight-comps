<template>
  <div class="index">
    <div class="left">
      <Elevator
        class="Elevator"
        @change="change"
        :index="i"
        :components="components"
      />
      <div class="tips">
        <span>绿色为简单的小组件，功能性不强</span>
        <span>蓝色为相对复杂一点的组件，功能性较强</span>
        <span>黄色为自定义指令</span>
      </div>
    </div>
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
import LybSvg from "../components/common/static/lyb-svg/demo"; //SVG图标
import Swipe from "../components/common/static/lyb-swipe/demo"; //swiper轮播图
import Table from "../components/common/static/lyb-table/demo"; //表格
import Video from "../components/common/static/lyb-video/demo"; //视频播放器
import GridLayout from "../components/common/static/lyb-grid-layout/demo"; //Grid特色布局
import GridNumber from "../components/common/static/lyb-grid-number/demo"; //Grid数字模板布局
import GridLetter from "../components/common/static/lyb-grid-letter/demo"; //Grid字母模板布局
import LybMask from "../components/common/static/lyb-mask/demo"; //Grid字母模板布局
import LybIframe from "../components/common/static/lyb-iframe/demo"; //Grid字母模板布局

import DragSort from "@/components/common/dynamic/lyb-drag-sort/demo"; //拖拽排序
import SelectAddress from "../components/common/dynamic/lyb-select-address/demo"; //省市区
import UploadFile from "../components/common/dynamic/lyb-upload/demo"; //文件上传
import UploadImg from "../components/common/dynamic/lyb-upload-img/demo"; //图片上传
import ValidationCountdown from "../components/common/dynamic/lyb-validation-countdown/demo"; //获取验证码按钮
import RichText from "../components/common/dynamic/lyb-rich-text/demo"; //富文本

import ParallaxImg from "@/directives/ParallaxImg";
import ParallaxVideo from "@/directives/ParallaxVideo";
export default {
  name: "index",
  components: {
    Elevator,
    Echarts,
    FlipBox,
    Icon,
    LybSvg,
    Loading,
    QrCode,
    Range,
    Scroll,
    Swipe,
    Table,
    Video,
    GridLayout,
    GridNumber,
    GridLetter,
    LybMask,
    LybIframe,

    DragSort,
    SelectAddress,
    UploadFile,
    UploadImg,
    ValidationCountdown,
    RichText,

    ParallaxImg,
    ParallaxVideo,
  },
  data() {
    return {
      components: [
        { name: "Echarts图表", is: "Echarts", type: "static" },
        { name: "卡片翻转", is: "FlipBox", type: "static" },
        { name: "图标", is: "Icon", type: "static" },
        { name: "SVG图标", is: "LybSvg", type: "static" },
        { name: "loading", is: "Loading", type: "static" },
        { name: "生成二维码", is: "QrCode", type: "static" },
        { name: "滑动选择器", is: "Range", type: "static" },
        { name: "移动端滚动插件", is: "Scroll", type: "static" },
        { name: "swiper轮播图", is: "Swipe", type: "static" },
        { name: "表格", is: "Table", type: "static" },
        { name: "视频播放器", is: "Video", type: "static" },
        { name: "Grid特色布局", is: "GridLayout", type: "static" },
        { name: "Grid数字模板布局", is: "GridNumber", type: "static" },
        { name: "Grid字母模板布局", is: "GridLetter", type: "static" },
        { name: "蒙版", is: "LybMask", type: "static" },
        { name: "iframe", is: "LybIframe", type: "static" },

        { name: "拖拽排序", is: "DragSort", type: "dynamic" },
        { name: "省市区", is: "SelectAddress", type: "dynamic" },
        { name: "文件上传", is: "UploadFile", type: "dynamic" },
        { name: "图片上传", is: "UploadImg", type: "dynamic" },
        { name: "获取验证码按钮", is: "ValidationCountdown", type: "dynamic" },
        { name: "富文本", is: "RichText", type: "dynamic" },

        { name: "图片视差背景", is: "ParallaxImg", type: "directive" },
        { name: "视频视差背景", is: "ParallaxVideo", type: "directive" },
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
  .left {
    overflow: auto;
    display: flex;
    .tips {
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0;
      height: 100%;
      justify-content: space-between;
      color: #fff;
      background-color: #000;
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
}

.bg-white {
  background-color: #fff;
}

.opacity {
  opacity: 1 !important;
}
</style>
