<template>
  <div class="demoFull">
    <div class="LybScrollFollow" ref="LybScrollFollow" @scroll="scroll">
      <div class="FollowBox" ref="FollowBox">
        <div class="sticky">
          <div class="a" ref="a"></div>
          <div class="b" ref="b"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  mounted() {
    this.callback(0);
  },
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
      //#####··········房间··········#####//
      this.play(
        this.$refs.a,
        [
          {
            interval: [0, 1500],
            fn(v) {
              return {
                transform: `scale(${4 - 2 * v})`,
                filter: "",
                opacity: 1,
              };
            },
          },
          {
            interval: [1500, 2500],
            fn(v) {
              return {
                transform: `scale(${2 - 1 * v})`,
                filter: `blur(${7.5 * v}px)`,
                opacity: 1,
              };
            },
          },
          {
            interval: [3000, 3500],
            fn(v) {
              return {
                transform: `scale(1)`,
                filter: `blur(7.5px)`,
                opacity: 1 - v,
              };
            },
          },
        ],
        v,
      );
      //#####··········书··········#####//
      this.play(
        this.$refs.b,
        [
          {
            interval: [1500, 2500],
            fn(v) {
              return {
                transform: `translateY(${50 - 50 * v}%) scale(${2 - 1 * v})`,
                opacity: v,
              };
            },
          },
          {
            interval: [3000, 3500],
            fn(v) {
              return {
                transform: "",
                opacity: `${1 - v}`,
              };
            },
          },
        ],
        v,
      );
    },

    play(el, phase, v) {
      phase.forEach((item, index) => {
        /* 如果滚动坐标超过了当前区间，则不执行，节省性能 */
        if (v <= item.interval[1] && v >= item.interval[0]) {
          let progress = 0;
          if (v >= item.interval[0]) {
            progress =
              (v - item.interval[0]) / (item.interval[1] - item.interval[0]);
            Object.keys(item.fn(progress)).forEach((_item) => {
              el.style[_item] = item.fn(progress)[_item];
            });
          }
        } else if (v > item.interval[1]) {
          Object.keys(item.fn(1)).forEach((_item) => {
            el.style[_item] = item.fn(1)[_item];
          });
        } else if (item.interval[0] > v && index === 0) {
          Object.keys(item.fn(0)).forEach((_item) => {
            el.style[_item] = item.fn(0)[_item];
          });
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
* {
  transition: all 0.5s;
}
*::-webkit-scrollbar {
  display: none;
}
.demoFull {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
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
      width: 100%;
      height: calc(3500px + 100vh);
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
        height: 100vh;
        background-color: #222;
        .a {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url("./img/room.png") no-repeat center center;
          background-size: cover;
        }
        .b {
          position: absolute;
          width: 100%;
          height: 75%;
          bottom: 0;
          background: url("./img/book.png") no-repeat center center;
          background-size: cover;
        }
      }
    }
  }
}
</style>
