<template>
  <div class="LybCircularProgress" ref="circular">
    <span class="num">{{ Math.floor(deg) }}%</span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: 75,
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
  mounted() {},
  methods: {
    fn() {
      this.$refs.circular.style.background = `conic-gradient(
        #1c8bde ${this.deg * 3.6}deg,
        #aaa ${this.deg * 3.6}deg 0deg
      )`;
      if (this.deg >= this.num) return;
      this.deg += 1;
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
  .flex();
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #ccc;
  &::after {
    .flex();
    content: "";
    position: absolute;
    width: 275px;
    height: 275px;
    background-color: #1a1c25;
    font-size: 50px;
  }
  .num {
    z-index: 1;
    font-size: 50px;
    color: #fff;
  }
}
</style>
