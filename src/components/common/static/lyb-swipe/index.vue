<template>
  <div
    class="LybSwipe"
    :ref="id"
    @mouseenter="is_hover = true"
    @mouseleave="is_hover = false"
  >
    <!-- Swiper -->
    <div class="swiper-wrapper">
      <slot>
        <div class="swiper-slide">
          <img src="./img/1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/3.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/4.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/5.png" alt />
        </div>
        <!-- 需要插入类名为swiper-slide的元素，且里面包含img标签，异步加载图片需要加v-if -->
      </slot>
    </div>
    <div class="swiper-pagination" ref="dot" v-show="isShowdot"></div>
    <transition name="fade">
      <LybIcon
        size="20"
        v-if="isShowLR"
        v-show="is_hover"
        class="swiper-button-next"
        :imgUrl="require('./img/right.png')"
        imgUrlHover="null"
        key="a"
      ></LybIcon>
    </transition>
    <transition name="fade">
      <LybIcon
        size="20"
        v-if="isShowLR"
        v-show="is_hover"
        class="swiper-button-prev"
        :imgUrl="require('./img/left.png')"
        imgUrlHover="null"
        key="b"
      ></LybIcon>
    </transition>
  </div>
</template>
<script>
import "./file/index.css";
import Swiper from "./file/index.js";
import LybIcon from "./childComp/lyb-icon";
export default {
  name: "LybSwipe",
  props: {
    id: {
      type: String,
      default: "lybSwiper",
    },
    // 图片路径
    imgUrls: {
      type: Array,
      default() {
        return [];
      },
    },
    // 是否显示小圆点
    isShowdot: {
      type: Boolean,
      default: false,
    },
    //是否显示左右切换
    isShowLR: {
      type: Boolean,
      default: true,
    },
    // 自动滚动间隔
    time: {
      type: Number,
      default: 1000,
    },
    // 滚动速度
    speed: {
      type: Number,
      default: 500,
    },
    /* 高级设置 */
    // 图片间距
    spaceBetween: {
      type: Number,
      default: 0,
    },
    // 开启一页三张轮播
    isMultiple: {
      type: Boolean,
      default: false,
    },
    // 切换样式
    switchEffect: {
      type: Object,
      default() {
        return {
          //旋转角度
          rotate: 0,
          // 间隔
          stretch: "25%",
          // 深度
          depth: 250,
          //是否显示阴影
          slideShadows: true,
        };
      },
    },
    // 一页显示几张图
  },
  data() {
    return {
      mySwiper: null,
      is_hover: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      Array.from(this.$refs.dot.children).forEach((item) => {
        item.style.width = "16px";
        item.style.height = "16px";
        item.style.borderRadius = `${16 / 2}px`;
        item.style.transition = "all 0.5s";
      });
    });
    const that = this;
    const mySwiper = new Swiper(this.$refs[this.id], {
      /* 动画时间 */
      speed: this.speed,
      /* 图片之间的间距 */
      spaceBetween: this.spaceBetween,
      /* 是否循环 */
      loop: true,
      /* 切换效果 */
      effect: this.isMultiple ? "coverflow" : "",
      //一页显示多少张图片
      slidesPerView: this.isMultiple ? 2 : 1,
      //居中显示
      centeredSlides: true,
      /* 样式属性 */
      coverflowEffect: this.isMultiple ? this.switchEffect : "",
      /* 底部分页按钮 */
      pagination: {
        el: ".swiper-pagination",
        //是否允许点击
        clickable: true,
      },
      /* 左右切换按钮 */
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      /* 自动滚动 */
      autoplay: {
        delay: this.time,
      },
      on: {
        slideChangeTransitionStart: function () {
          that.$emit("transitionStart", this.activeIndex);
        },
        slideChangeTransitionEnd: function () {
          that.$emit("transitionEnd", this.activeIndex);
        },
      },
    });
    //鼠标覆盖停止自动切换
    mySwiper.el.onmouseover = function () {
      mySwiper.autoplay.stop();
    };
    //鼠标离开开始自动切换
    mySwiper.el.onmouseout = function () {
      mySwiper.autoplay.start();
    };
  },
  components: { LybIcon },
};
</script>
<style scoped lang="less">
.LybSwipe {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-slide {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    transform: translateY(-50%);
  }
}

/* 淡入淡出 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
</style>
