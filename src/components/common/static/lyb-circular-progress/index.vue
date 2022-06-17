<template>
  <div class="LybCircularProgress" ref="circular">
    <span class="num" :style="{ fontSize: fontSize, color: fontColor }"
      >{{ Math.floor(deg) }}%</span
    >
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: 75,
    },
    lineColor: {
      type: String,
      default: "",
    },
    lineBgc: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "#000",
    },
    fontSize: {
      type: String,
      default: "",
    },
    fontColor: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    thick: {
      type: String,
      default: "",
    },
  },
  name: "LybCircularProgress",
  data() {
    return {
      num: 0,
      deg: 0,
    };
  },
  components: {},
  watch: {
    value: {
      handler(v) {
        this.deg = 0;
        if (v === "") {
          this.num = 0;
        } else if (v > 100) {
          this.num = 100;
        } else {
          this.num = v;
        }
        this.$nextTick(() => {
          this.fn();
        });
      },
      immediate: true,
    },
  },
  mounted() {
    let a = document.querySelector(".LybCircularProgress");
    a.style.setProperty("--bg", this.bgColor);
    a.style.setProperty("--size", this.size);
    a.style.setProperty("--thick", this.thick);
    a.style.fontSize = this.fontSize;
  },
  methods: {
    fn() {
      this.$refs.circular.style.background = `conic-gradient(
        ${this.lineColor} ${this.deg * 3.6}deg,
        ${this.lineBgc} ${this.deg * 3.6}deg 0deg
      )`;
      if (this.deg >= this.num) return;
      this.deg += 0.1;
      requestAnimationFrame(this.fn);
    },
  },
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.LybCircularProgress {
  --bg: #000;
  --size: 300px;
  --thick: 25px;
  .flex();
  position: relative;
  width: var(--size);
  height: var(--size);
  &::after {
    .flex();
    content: "";
    position: absolute;
    width: calc(var(--size) - var(--thick));
    height: calc(var(--size) - var(--thick));
    background-color: var(--bg);
  }
  .num {
    z-index: 1;
  }
}
</style>
