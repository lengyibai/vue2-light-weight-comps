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
      default: 0,
    },
  },
  name: "lyb-grid",
  // updated() {
  //   this.updateHeight();
  // },
  data() {
    return {
      lybGrid: null,
    };
  },
  mounted() {
    this.lybGrid = this.$refs.lybGrid;
    let timer = setInterval(() => {
      if (this.lybGrid.querySelectorAll(".box")[0]?.offsetHeight) {
        clearInterval(timer);
        return;
      }
      this.updateHeight();
    }, 1000);
    // 如果设置了 eqhMultiple ，则需要给插槽内的盒子设置类名 eqhMultiple
    if (this.eqhMultiple <= 0) return;
    window.addEventListener(
      "resize",
      function () {
        requestAnimationFrame(
          function () {
            const box = this.lybGrid.querySelectorAll(".eqhMultiple");
            box.forEach((item) => {
              item.style.height = item.offsetWidth * this.eqhMultiple + "px";
            });
          }.bind(this),
        );
      }.bind(this),
    );
  },
  methods: {
    updateHeight() {
      const box = this.lybGrid.querySelectorAll(".eqhMultiple");
      box.forEach((item) => {
        //只对新加的盒子设置高度
        if (item.offsetHeight) return;
        item.style.height = item.offsetWidth * this.eqhMultiple + "px";
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
