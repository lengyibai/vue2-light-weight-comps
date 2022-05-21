<template>
  <div
    class="lyb-grid"
    ref="lybGrid"
    :style="{ gridTemplateColumns: 'repeat(' + count + ', 1fr)', gridGap: gap }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 5,
    },
    gap: {
      type: String,
      default: "",
    },
    eqhMultiple: {
      type: Number,
      default: 1,
    },
  },
  name: "lyb-grid",
  // updated() {
  //   this.updateHeight();
  // },
  mounted() {
    let timer = setInterval(() => {
      if (this.$refs.lybGrid.querySelectorAll('.box')[0]?.offsetHeight) {
        clearInterval(timer);
        return;
      }
      this.updateHeight();
    }, 1000);
    window.addEventListener(
      "resize",
      function () {
        const box = document.querySelectorAll(".box");
        box.forEach((item) => {
          item.style.height = item.offsetWidth / this.eqhMultiple + "px";
        });
      }.bind(this),
    );
  },
  methods: {
    updateHeight() {
      const box = this.$refs.lybGrid.querySelectorAll(".box");
      box.forEach((item) => {
        //只对新加的盒子设置高度
        if (item.offsetHeight) return;
        item.style.height = item.offsetWidth / this.eqhMultiple + "px";
      });
    },
  },
};
</script>
<style scoped lang="less">
.lyb-grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row dense;
  align-content: flex-start;
}
</style>
