<template>
  <div class="demoFull">
    <div class="LybScrollFollow" ref="LybScrollFollow" @scroll="scrollFollow">
      <div class="FollowBox" ref="FollowBox">
        <div class="sticky">
          <div class="a" ref="a"></div>
          <div class="b" ref="b"></div>
          <div class="c" ref="c">by lengyibai</div>
          <div class="d" ref="d">Hello World!</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  mounted() {
    this.scrollFollowPlaycallback(0);
  },
  methods: {
    scrollFollow() {
      const parent = this.$refs.LybScrollFollow;
      const el = this.$refs.FollowBox;
      let p = 0;
      let parent_height = parent.clientHeight;
      let scrollY = parent.scrollTop;
      let intoY = -el.getBoundingClientRect().y;
      if (intoY >= 0) {
        p = (
          (scrollY - el.offsetTop) /
          (el.offsetHeight - parent_height)
        ).toFixed(4);
      }
      if (p > 1) {
        p = 1;
      }
      this.scrollFollowPlaycallback(scrollY);
    },

    scrollFollowPlaycallback(v) {
      //#####··········名··········#####//
      this.scrollFollowPlay(v, this.$refs.d, [
        [
          0,
          500,
          (v) => {
            return {
              opacity: v,
            };
          },
        ],
        [
          500,
          2000,
          (v) => {
            return {
              opacity: 1 - v,
            };
          },
        ],
      ]);
      //#####··········房间··········#####//
      this.scrollFollowPlay(v, this.$refs.a, [
        [
          1000,
          1500,
          (v) => {
            return {
              opacity: v,
              transform: "scale(4)",
              filter: "",
            };
          },
        ],
        [
          1500,
          2000,
          (v) => {
            return {
              transform: `scale(${4 - 2 * v})`,
              filter: "",
              opacity: 1,
            };
          },
        ],
        [
          2000,
          3000,
          (v) => {
            return {
              transform: `scale(${2 - 1 * v})`,
              filter: `blur(${7.5 * v}px)`,
              opacity: 1,
            };
          },
        ],
        [
          3500,
          4000,
          (v) => {
            return {
              transform: `scale(1)`,
              filter: `blur(7.5px)`,
              opacity: 1 - v,
            };
          },
        ],
      ]);
      //#####··········书··········#####//
      this.scrollFollowPlay(v, this.$refs.b, [
        [
          2000,
          3000,
          (v) => {
            return {
              transform: `translateY(${50 - 50 * v}%) scale(${2 - 1 * v})`,
              opacity: v,
            };
          },
        ],
        [
          3500,
          4000,
          (v) => {
            return {
              transform: "",
              opacity: `${1 - v}`,
            };
          },
        ],
      ]);

      //#####··········名··········#####//
      this.scrollFollowPlay(v, this.$refs.c, [
        [
          4000,
          4250,
          (v) => {
            return {
              transform: `translateY(${100 - 100 * v}px)`,
              opacity: v,
            };
          },
        ],
      ]);
    },

    scrollFollowPlay(v, el, phase) {
      phase.forEach((i, index) => {
        /* 如果滚动坐标超过了当前区间，则不执行，节省性能 */
        if (v <= i[1] && v >= i[0]) {
          let p = 0;
          if (v >= i[0]) {
            p = (v - i[0]) / (i[1] - i[0]);
            Object.keys(i[2](p)).forEach((_i) => {
              el.style[_i] = i[2](p)[_i];
            });
          }
        } else if (v > i[1]) {
          Object.keys(i[2](1)).forEach((_i) => {
            el.style[_i] = i[2](1)[_i];
          });
        } else if (i[0] > v && index === 0) {
          Object.keys(i[2](0)).forEach((_i) => {
            el.style[_i] = i[2](0)[_i];
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
  // display: none;
}
.demoFull {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
  .LybScrollFollow {
    height: 100vh;
    overflow: hidden auto;
    .FollowBox {
      width: 100%;
      height: calc(4250px + 100vh);
      .sticky {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
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
        .c,
        .d {
          position: absolute;
          font-size: 5vw;
          width: 100%;
          height: 100%;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
