import LybFullScroll from "./static/lyb-full-scroll";
//#####··········静态··········#####//
import LybDragSort from "./static/lyb-drag-sort"; //拖拽排序
import LybEchartsBar from "./static/lyb-echarts/lyb-echarts-bar"; /* 图表 */
import LybEchartsLine from "./static/lyb-echarts/lyb-echarts-line";
import LybEchartsPie from "./static/lyb-echarts/lyb-echarts-pie";
import LybFlipBox from "./static/lyb-flip-box"; //卡片翻转
import LybIcon from "./static/lyb-icon"; //图标
import LybLoading from "./static/lyb-loading"; //loading
import LybQrCode from "./static/lyb-qr-code"; //生成二维码组件
import LybRange from "./static/lyb-range"; //滑动选择器
import LybScroll from "./static/lyb-scroll"; //滚动组件精简版
import LybSwipe from "./static/lyb-swipe"; //轮播图
import LybTable from "./static/lyb-table"; /* 表格 */
import LybTableColumn from "./static/lyb-table/lyb-table-column.vue";
import LybVideo from "./static/lyb-video"; //视频播放器

//#####··········动态··········#####//
// import LybRichText from "./dynamic/lyb-rich-text"; //富文本框
import LybSelectAddress from "./dynamic/lyb-select-address"; // 省市区联动
import LybUploadMultiple from "./dynamic/lyb-upload/lyb-upload-multiple.vue"; /* 文件上传 */
import LybUploadSingle from "./dynamic/lyb-upload/lyb-upload-single.vue";
import LybValidationCountdown from "./dynamic/lyb-validation-countdown"; // 发送验证码按钮（倒计时）

//使用组件
const components = [
  LybFullScroll,
  /* 静态 */
  LybDragSort,
  LybEchartsBar,
  LybEchartsLine,
  LybEchartsPie,
  LybFlipBox,
  LybIcon,
  LybLoading,
  LybQrCode,
  LybRange,
  LybScroll,
  LybSwipe,
  LybTable,
  LybTableColumn,
  LybVideo,
  /* 动态 */
  // LybRichText,
  LybSelectAddress,
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
