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
      <div
        class="box"
        v-for="(item, index) in components"
        v-show="i === index"
        :key="index"
      >
        <div is="transition" name="fade">
          <div v-if="i === index" :is="item.is"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Elevator from "./childComp/Elevator.vue";
import CircularProgress from "../components/common/static/lyb-circular-progress/demo"; //环形进度条
import Echarts from "@/components/common/static/lyb-echarts/demo"; //Echarts图表
import FlipBox from "@/components/common/static/lyb-flip-box/demo"; //卡片翻转
import FullScroll from "../components/common/static/lyb-full-scroll/demo"; // 全屏滚动
import GridLayout from "../components/common/static/lyb-grid-layout/demo"; //Grid特色布局
import GridLetter from "../components/common/static/lyb-grid-letter/demo"; //Grid字母模板布局
import GridNumber from "../components/common/static/lyb-grid-number/demo"; //Grid数字模板布局
import Icon from "../components/common/static/lyb-icon/demo"; //图标
import Loading from "../components/common/static/lyb-loading/demo"; //loading
import LybIframe from "../components/common/static/lyb-iframe/demo"; //Grid字母模板布局
import LybMask from "../components/common/static/lyb-mask/demo"; //Grid字母模板布局
import LybSvg from "../components/common/static/lyb-svg/demo"; //SVG图标
import QrCode from "../components/common/static/lyb-qr-code/demo"; //生成二维码
import Range from "../components/common/static/lyb-range/demo"; //滑动选择器
import Scroll from "../components/common/static/lyb-scroll/demo"; //移动端滚动插件
import Swipe from "../components/common/static/lyb-swipe/demo"; //swiper轮播图
import Table from "../components/common/static/lyb-table/demo"; //表格
import Video from "../components/common/static/lyb-video/demo"; //视频播放器
import MaskClose from "../components/common/static/lyb-mask-close/demo"; //视频播放器

import DragSort from "@/components/common/dynamic/lyb-drag-sort/demo"; //拖拽排序
import RichText from "../components/common/dynamic/lyb-rich-text/demo"; //富文本
import SelectAddress from "../components/common/dynamic/lyb-select-address/demo"; //省市区
import UploadFile from "../components/common/dynamic/lyb-upload/demo"; //文件上传
import UploadImg from "../components/common/dynamic/lyb-upload-img/demo"; //图片上传
import ValidationCountdown from "../components/common/dynamic/lyb-validation-countdown/demo"; //获取验证码按钮

import MaskGradient from "@/directives/MaskGradient"; //渐变蒙版
import ParallaxImg from "@/directives/ParallaxImg"; //图片视差背景
import ParallaxVideo from "@/directives/ParallaxVideo"; //视频视差背景
import Particle from "@/directives/Particle"; //粒子效果
import SakuraFalling from "@/directives/SakuraFalling"; //樱花飘落
import SnowFalling from "@/directives/SnowFalling"; //雪花飘落
import SweepLight from "@/directives/SweepLight"; //卡片扫光
import TextHoverColor from "@/directives/TextHoverColor"; //文字悬浮变色
import TypewriterMultiple from "@/directives/TypewriterMultiple"; //多行打字机
import TypewriterSingle from "@/directives/TypewriterSingle"; //单行打字机
export default {
  name: "index",
  components: {
    Elevator,
    CircularProgress,
    Echarts,
    FlipBox,
    FullScroll,
    GridLayout,
    GridLetter,
    GridNumber,
    Icon,
    Loading,
    LybIframe,
    LybMask,
    LybSvg,
    MaskClose,
    QrCode,
    Range,
    Scroll,
    Swipe,
    Table,
    Video,

    DragSort,
    RichText,
    SelectAddress,
    UploadFile,
    UploadImg,
    ValidationCountdown,

    MaskGradient,
    ParallaxImg,
    ParallaxVideo,
    Particle,
    SakuraFalling,
    SnowFalling,
    SweepLight,
    TextHoverColor,
    TypewriterMultiple,
    TypewriterSingle,
  },
  data() {
    return {
      components: [
        { is: "CircularProgress", name: "环形进度条", type: "static" },
        { is: "Echarts", name: "Echarts图表", type: "static" },
        { is: "FlipBox", name: "卡片翻转", type: "static" },
        { is: "FullScroll", name: "全屏滚动", type: "static" },
        { is: "GridLayout", name: "Grid特色布局", type: "static" },
        { is: "GridLetter", name: "Grid字母模板布局", type: "static" },
        { is: "GridNumber", name: "Grid数字模板布局", type: "static" },
        { is: "Icon", name: "图标", type: "static" },
        { is: "Loading", name: "loading", type: "static" },
        { is: "LybIframe", name: "iframe", type: "static" },
        { is: "LybMask", name: "蒙版", type: "static" },
        { is: "LybSvg", name: "SVG变色图标", type: "static" },
        { is: "MaskClose", name: "顶部关闭蒙版", type: "static" },
        { is: "QrCode", name: "生成二维码", type: "static" },
        { is: "Range", name: "滑动选择器", type: "static" },
        { is: "Scroll", name: "移动端滚动插件", type: "static" },
        { is: "Swipe", name: "Swiper轮播图", type: "static" },
        { is: "Table", name: "表格", type: "static" },
        { is: "Video", name: "视频播放器", type: "static" },

        { is: "DragSort", name: "拖拽排序", type: "dynamic" },
        { is: "RichText", name: "富文本", type: "dynamic" },
        { is: "SelectAddress", name: "省市区", type: "dynamic" },
        { is: "UploadFile", name: "文件上传", type: "dynamic" },
        { is: "UploadImg", name: "图片上传", type: "dynamic" },
        { is: "ValidationCountdown", name: "获取验证码按钮", type: "dynamic" },

        { is: "MaskGradient", name: "渐变蒙版", type: "directive" },
        { is: "ParallaxImg", name: "图片视差背景", type: "directive" },
        { is: "ParallaxVideo", name: "视频视差背景", type: "directive" },
        { is: "Particle", name: "粒子效果", type: "directive" },
        { is: "SakuraFalling", name: "樱花飘落", type: "directive" },
        { is: "SnowFalling", name: "雪花飘落", type: "directive" },
        { is: "SweepLight", name: "卡片扫光", type: "directive" },
        { is: "TextHoverColor", name: "文字悬浮变色", type: "directive" },
        { is: "TypewriterMultiple", name: "打字机(多行)", type: "directive" },
        { is: "TypewriterSingle", name: "打字机(单行)", type: "directive" },
      ],
      i: 0,
    };
  },
  methods: {
    //#####········点击触发········#####//
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
    height: 100vh;
    overflow: hidden;
    .box {
      height: 100%;
      padding: 25px;
      overflow: auto;
    }
  }
}

.bg-white {
  background-color: #fff;
}
/* 进入前状态 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* 进入和离开动画属性 */
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}
</style>
