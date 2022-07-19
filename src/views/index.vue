<template>
  <div class="index">
    <div class="left">
      <Elevator
        class="Elevator"
        @change="change"
        :title="title"
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
        v-show="title === item.name"
        :key="index"
      >
        <div is="transition" name="fade">
          <div v-if="title === item.name" :is="item.is"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CircularProgress from "@/components/common/static/lyb-circular-progress/demo"; //环形进度条
import CommitBtn from "@/components/common/static/lyb-commit-btn/demo"; //提交按钮
import UpdateBtn from "@/components/common/static/lyb-update-btn/demo"; //更新按钮
import DeleteBtn from "@/components/common/static/lyb-delete-btn/demo"; //删除按钮
import CancelBtn from "@/components/common/static/lyb-cancel-btn/demo"; //取消按钮
import Echarts from "@/components/common/static/lyb-echarts/demo"; //Echarts图表
import Elevator from "./childComp/Elevator.vue";
import FlipBox from "@/components/common/static/lyb-flip-box/demo"; //卡片翻转
import FullScroll from "@/components/common/static/lyb-full-scroll/demo"; // 全屏滚动
import GridLayout from "@/components/common/static/lyb-grid-layout/demo"; //Grid特色布局
import GridLetter from "@/components/common/static/lyb-grid-letter/demo"; //Grid字母模板布局
import GridNumber from "@/components/common/static/lyb-grid-number/demo"; //Grid数字模板布局
import Icon from "@/components/common/static/lyb-icon/demo"; //图标
import Loading from "@/components/common/static/lyb-loading/demo"; //loading
import LybIframe from "@/components/common/static/lyb-iframe/demo"; //Grid字母模板布局
import LybMask from "@/components/common/static/lyb-mask/demo"; //Grid字母模板布局
import LybSvg from "@/components/common/static/lyb-svg/demo"; //SVG图标
import MaskClose from "@/components/common/static/lyb-mask-close/demo"; //顶部关闭蒙版
import QrCode from "@/components/common/static/lyb-qr-code/demo"; //生成二维码
import Range from "@/components/common/static/lyb-range/demo"; //滑动选择器
import Scroll from "@/components/common/static/lyb-scroll/demo"; //移动端滚动插件
import Swipe from "@/components/common/static/lyb-swipe/demo"; //swiper轮播图
import Table from "@/components/common/static/lyb-table/demo"; //表格
import Video from "@/components/common/static/lyb-video/demo"; //视频播放器

import DragSort from "@/components/common/dynamic/lyb-drag-sort/demo"; //拖拽排序
import PdrPulMultiple from "@/components/common/dynamic/lyb-pdr-pul-multiple/demo"; //上拉加载下拉刷新(单)
import PdrPulSingle from "@/components/common/dynamic/lyb-pdr-pul-single/demo"; //上拉加载下拉刷新(单)
import RichText from "@/components/common/dynamic/lyb-rich-text/demo"; //富文本
import SelectAddress from "@/components/common/dynamic/lyb-select-address/demo"; //省市区
import UploadFile from "@/components/common/dynamic/lyb-upload/demo"; //文件上传
import UploadImg from "@/components/common/dynamic/lyb-upload-img/demo"; //图片上传
import ValidationCountdown from "@/components/common/dynamic/lyb-validation-countdown/demo"; //获取验证码按钮
import ScrollInto from "@/components/common/dynamic/lyb-scroll-into/demo"; //滚动入场动画
import ScrollFollow from "@/components/common/dynamic/lyb-scroll-follow/demo"; //滚动跟随动画

import DownDrag from "@/directives/DownDrag"; //按下拖动
import EqualRatio from "@/directives/EqualRatio"; //高度等于宽度
import ImageOptimizer from "@/directives/ImageOptimizer"; //单行打字机
import MaskGradient from "@/directives/MaskGradient"; //渐变蒙版
import ModifyText from "@/directives/ModifyText"; //元素可编辑
import ParallaxImg from "@/directives/ParallaxImg"; //图片视差背景
import ParallaxVideo from "@/directives/ParallaxVideo"; //视频视差背景
import Particle from "@/directives/Particle"; //粒子效果
import SakuraFalling from "@/directives/SakuraFalling"; //樱花飘落
import SnowFalling from "@/directives/SnowFalling"; //雪花飘落
import SweepLight from "@/directives/SweepLight"; //卡片扫光
import TableLayout from "@/directives/TableLayout"; //表格布局对齐方式
import TextHoverColor from "@/directives/TextHoverColor"; //文字悬浮变色
import TypewriterMultiple from "@/directives/TypewriterMultiple"; //多行打字机
import TypewriterSingle from "@/directives/TypewriterSingle"; //单行打字机
import WaveDiffuse from "@/directives/WaveDiffuse"; //水波扩散
export default {
  name: "index",
  components: {
    Elevator,
    CircularProgress,
    CommitBtn,
    UpdateBtn,
    DeleteBtn,
    CancelBtn,
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
    PdrPulMultiple,
    PdrPulSingle,
    RichText,
    SelectAddress,
    UploadFile,
    UploadImg,
    ValidationCountdown,
    ScrollInto,
    ScrollFollow,

    DownDrag,
    EqualRatio,
    ImageOptimizer,
    MaskGradient,
    ModifyText,
    ParallaxImg,
    ParallaxVideo,
    Particle,
    SakuraFalling,
    SnowFalling,
    SweepLight,
    TableLayout,
    TextHoverColor,
    TypewriterMultiple,
    TypewriterSingle,
    WaveDiffuse,
  },
  data() {
    return {
      components: [
        { name: "表格", is: "Table", type: "static" },
        { name: "顶部关闭蒙版", is: "MaskClose", type: "static" },
        { name: "更新按钮", is: "UpdateBtn", type: "static" },
        { name: "滑动选择器", is: "Range", type: "static" },
        { name: "环形进度条", is: "CircularProgress", type: "static" },
        { name: "卡片翻转", is: "FlipBox", type: "static" },
        { name: "蒙版", is: "LybMask", type: "static" },
        { name: "取消按钮", is: "CancelBtn", type: "static" },
        { name: "全屏滚动", is: "FullScroll", type: "static" },
        { name: "删除按钮", is: "DeleteBtn", type: "static" },
        { name: "生成二维码", is: "QrCode", type: "static" },
        { name: "视频播放器", is: "Video", type: "static" },
        { name: "提交按钮", is: "CommitBtn", type: "static" },
        { name: "图标", is: "Icon", type: "static" },
        { name: "移动端滚动插件", is: "Scroll", type: "static" },
        { name: "Echarts图表", is: "Echarts", type: "static" },
        { name: "Grid数字模板布局", is: "GridNumber", type: "static" },
        { name: "Grid特色布局", is: "GridLayout", type: "static" },
        { name: "Grid字母模板布局", is: "GridLetter", type: "static" },
        { name: "iframe", is: "LybIframe", type: "static" },
        { name: "loading", is: "Loading", type: "static" },
        { name: "SVG变色图标", is: "LybSvg", type: "static" },
        { name: "Swiper轮播图", is: "Swipe", type: "static" },

        { name: "富文本", is: "RichText", type: "dynamic" },
        { name: "滚动入场动画", is: "ScrollInto", type: "dynamic" },
        { name: "滚动跟随动画", is: "ScrollFollow", type: "dynamic" },
        { name: "获取验证码按钮", is: "ValidationCountdown", type: "dynamic" },
        { name: "上拉加载下拉刷新(单)", is: "PdrPulSingle", type: "dynamic" },
        { name: "上拉加载下拉刷新(多)", is: "PdrPulMultiple", type: "dynamic" },
        { name: "省市区", is: "SelectAddress", type: "dynamic" },
        { name: "图片上传", is: "UploadImg", type: "dynamic" },
        { name: "拖拽排序", is: "DragSort", type: "dynamic" },
        { name: "文件上传", is: "UploadFile", type: "dynamic" },

        { name: "按下拖动", is: "DownDrag", type: "directive" },
        { name: "表格布局对齐方式", is: "TableLayout", type: "directive" },
        { name: "打字机(单行)", is: "TypewriterSingle", type: "directive" },
        { name: "打字机(多行)", is: "TypewriterMultiple", type: "directive" },
        { name: "高度等于宽度", is: "EqualRatio", type: "directive" },
        { name: "渐变蒙版", is: "MaskGradient", type: "directive" },
        { name: "卡片扫光", is: "SweepLight", type: "directive" },
        { name: "粒子效果", is: "Particle", type: "directive" },
        { name: "视频视差背景", is: "ParallaxVideo", type: "directive" },
        { name: "水波扩散", is: "WaveDiffuse", type: "directive" },
        { name: "图片视差背景", is: "ParallaxImg", type: "directive" },
        { name: "图片压缩", is: "ImageOptimizer", type: "directive" },
        { name: "文字悬浮变色", is: "TextHoverColor", type: "directive" },
        { name: "雪花飘落", is: "SnowFalling", type: "directive" },
        { name: "樱花飘落", is: "SakuraFalling", type: "directive" },
        { name: "元素可编辑", is: "ModifyText", type: "directive" },
      ],
      title: "全屏滚动",
    };
  },
  methods: {
    //#####········点击触发········#####//
    change(title) {
      this.title = title;
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
