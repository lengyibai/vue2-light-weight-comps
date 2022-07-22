<template>
  <div class="demoFull">
    <a
      target="_blank"
      href="https://lengyibai-scroll-animate.netlify.app"
      v-textHoverColor
      >点击这里去复制动画名填入下框</a
    >
    <input type="text" v-model="name" placeholder="请输入动画库里的动画名" />
    <input type="text" v-model="time" placeholder="请输入动画时长" />
    <input type="text" v-model="into" placeholder="滚动到几倍自身大小显示" />
    <div class="btn" @click="once = !once">
      点击切换为{{ once ? "重复播放" : "播放一次" }}
    </div>
    <LybScrollInto
      v-if="toggle"
      class="LybScrollInto"
      :animate="{ name, into, time }"
      :once="once"
    >
      <div class="fill"></div>
      <h1>由父组件决定<br />(左上角输入框)</h1>
      <IntoBox>
        <div class="box a"></div>
      </IntoBox>
      <h1>从小到大</h1>
      <IntoBox :animate="{ name: 'scale1', time: 0.5, into: 0.25 }">
        <div class="box b"></div>
      </IntoBox>
      <h1>从大到小</h1>
      <IntoBox :animate="{ name: 'scale2', time: 0.5, into: 0.25 }">
        <div class="box c"></div>
      </IntoBox>
      <h1>从左到右顺时针</h1>
      <IntoBox :animate="{ name: 'mixedTR5', time: 0.5, into: 0.25 }">
        <div class="box d"></div>
      </IntoBox>
      <h1>从右到左逆时针</h1>
      <IntoBox :animate="{ name: 'mixedTR6', time: 0.5, into: 0.25 }">
        <div class="box e"></div>
      </IntoBox>
      <h1>自定义动画</h1>
      <IntoBox :animate="{ name: animate, time: 3, into: 0.25 }">
        <div class="box f"></div>
      </IntoBox>
      <div class="fill"></div>
    </LybScrollInto>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      name: "translate4",
      time: 0.25,
      into: 1,
      once: false,
      toggle: true,
    };
  },
  watch: {
    once() {
      this.toggle = false;
      setTimeout(() => {
        this.toggle = true;
      });
    },
  },
  methods: {
    blur(e) {
      this.name = e.target.value;
    },
    animate(el) {
      el.style.transform = "rotate(360deg) scale(5)";
    },
  },
};
</script>
<style scoped lang="less">
.demoFull {
  overflow: hidden;
  a {
    color: #2980b9;
    position: relative;
    font-size: 1vw;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    &:nth-of-type(1) {
      transform: translateY(100%);
    }
    &:nth-of-type(2) {
      transform: translateY(250%);
    }
    &:nth-of-type(3) {
      transform: translateY(400%);
    }
  }
  .btn {
    position: absolute;
    right: 0;
  }
  .LybScrollInto {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #fff;
      font-size: 3vw;
      margin-top: 1em;
    }
    .fill {
      flex-shrink: 0;
      width: 25vw;
      height: 200vh;
    }
    .box {
      width: 20vw;
      height: 20vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vw;
      color: #fff;
    }
  }
}

.a {
  background-image: linear-gradient(180deg, #dc3545 0%, #fd7e14 100%);
}

.b {
  background-image: linear-gradient(180deg, #fd7e14 0%, #ffc107 100%);
}

.c {
  background-image: linear-gradient(180deg, #ffc107 0%, #28a745 100%);
}

.d {
  background-image: linear-gradient(180deg, #28a745 0%, #17a2b8 100%);
}

.e {
  background-image: linear-gradient(180deg, #17a2b8 0%, #007bff 100%);
}

.f {
  background-image: linear-gradient(180deg, #007bff 0%, #6610f2 100%);
}

.g {
  background-image: linear-gradient(180deg, #6610f2 0%, #e83e8c 100%);
}
</style>
