<template>
  <div class="demoFull">
    <div class="LybScrollFollow" ref="LybScrollFollow" @scroll="scroll">
      <div class="fill"></div>
      <div class="FollowBox" ref="FollowBox">
        <div class="sticky"><div class="a" ref="a"></div></div>
      </div>
      <div class="fill"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  methods: {
    scroll() {
      const parent = this.$refs.LybScrollFollow;
      const el = this.$refs.FollowBox;
      let progress = 0;
      let parent_height = parent.clientHeight;
      let scrollY = parent.scrollTop;
      let intoY = -el.getBoundingClientRect().y;
      if (intoY >= 0) {
        progress = (
          (scrollY - el.offsetTop) /
          (el.offsetHeight - parent_height)
        ).toFixed(4);
      }
      if (progress > 1) {
        progress = 1;
      }
      this.callback(scrollY);
    },
    callback(v) {
      this.play(
        this.$refs.a,
        [
          {
            start: 1000,
            end: 1500,
            fn(el, v) {
              el.style.transform = `translateX(${0 - 200 * v}px)`;
            },
          },
          {
            start: 2000,
            end: 2500,
            fn(el, v) {
              el.style.transform = `translateX(-200px) translateY(${
                -200 * v
              }px)`;
            },
          },
          {
            start: 3000,
            end: 3500,
            fn(el, v) {
              el.style.transform = `translateX(${
                -200 + 400 * v
              }px) translateY(-200px)`;
            },
          },
          {
            start: 4000,
            end: 4500,
            fn(el, v) {
              el.style.transform = `translateX(200px) translateY(${
                -200 + 200 * v
              }px)`;
            },
          },
          {
            start: 5000,
            end: 5500,
            fn(el, v) {
              el.style.transform = `translateX(${200 - 200 * v}px)`;
            },
          },
        ],
        v,
      );
    },
    play(el, phase, v) {
      el.innerHTML = v + "px";
      phase.forEach((item) => {
        let progress = 0;
        if (v >= item.start) {
          progress = (v - item.start) / (item.end - item.start);
          if (v > item.end) {
            progress = 1;
          }
          item.fn(el, progress);
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
.demoFull {
  overflow: hidden;
  background-color: #333;
  .LybScrollFollow {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: auto;
    .fill {
      flex-shrink: 0;
      width: 25vw;
      height: 100vh;
    }
    .FollowBox {
      width: 75%;
      height: 6000px;
      background-color: #000;
      flex-shrink: 0;
      .sticky {
        position: sticky;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        flex-shrink: 0;
        width: 100%;
        height: 75vh;
        background-color: #222;
        .a {
          position: absolute;
          color: #fff;
          font-size: 100px;
        }
      }
    }
  }
}
</style>
