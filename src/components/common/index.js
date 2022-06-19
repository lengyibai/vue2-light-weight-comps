import LybFullScroll from "./static/lyb-full-scroll";
//#####··········静态··········#####//
import LybCircularProgress from "./static/lyb-circular-progress"; //环形进度条
import LybEchartsBar from "./static/lyb-echarts/lyb-echarts-bar"; /* 图表 */
import LybEchartsLine from "./static/lyb-echarts/lyb-echarts-line";
import LybEchartsPie from "./static/lyb-echarts/lyb-echarts-pie";
import LybFlipBox from "./static/lyb-flip-box"; //卡片翻转
import LybGrid from "./static/lyb-grid-layout"; //视频播放器
import LybGridLetter from "./static/lyb-grid-letter"; //视频播放器
import LybGridNumber from "./static/lyb-grid-number"; //视频播放器
import LybIcon from "./static/lyb-icon"; //图标
import LybIframe from "./static/lyb-iframe"; //iframe
import LybLoading from "./static/lyb-loading"; //loading
import LybMaskClose from "./static/lyb-mask-close"; //环形进度条
import LybQrCode from "./static/lyb-qr-code"; //生成二维码组件
import LybRange from "./static/lyb-range"; //滑动选择器
import LybScroll from "./static/lyb-scroll"; //滚动组件精简版
import LybSvg from "./static/lyb-svg"; //SVG图标
import LybSwipe from "./static/lyb-swipe"; //轮播图
import LybTable from "./static/lyb-table"; /* 表格 */
import LybTableColumn from "./static/lyb-table/lyb-table-column.vue";
import LybVideo from "./static/lyb-video"; //视频播放器

//#####··········动态··········#####//
import LybDragSort from "./dynamic/lyb-drag-sort"; //拖拽排序
import LybRichText from "./dynamic/lyb-rich-text"; //富文本框
import LybSelectAddress from "./dynamic/lyb-select-address"; // 省市区联动
import LybUploadImg from "./dynamic/lyb-upload-img";
import LybUploadMultiple from "./dynamic/lyb-upload/lyb-upload-multiple.vue"; /* 文件上传 */
import LybUploadSingle from "./dynamic/lyb-upload/lyb-upload-single.vue";
import LybValidationCountdown from "./dynamic/lyb-validation-countdown"; // 发送验证码按钮（倒计时）

//使用组件
const components = [
  /* 静态 */
  LybCircularProgress,
  LybEchartsBar,
  LybEchartsLine,
  LybEchartsPie,
  LybFlipBox,
  LybFullScroll,
  LybGrid,
  LybGridLetter,
  LybGridNumber,
  LybIcon,
  LybIframe,
  LybLoading,
  LybMaskClose,
  LybQrCode,
  LybRange,
  LybScroll,
  LybSvg,
  LybSwipe,
  LybTable,
  LybTableColumn,
  LybVideo,
  /* 动态 */
  LybDragSort,
  LybRichText,
  LybSelectAddress,
  LybUploadImg,
  LybUploadMultiple,
  LybUploadSingle,
  LybValidationCountdown,
];
export default {
  //只会执行install
  install(Vue) {
    //注册组件
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
