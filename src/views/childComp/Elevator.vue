<template>
  <div class="Elevator">
    <div
      class="page"
      :class="{ active: currentIndex === index }"
      @click="fn(index)"
      v-for="(item, index) in components"
      :key="index"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    components: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  name: "Elevator",
  data() {
    return {
      currentIndex: 0,
    };
  },
  watch: {
    index(v) {
      this.currentIndex = v;
    },
  },
  created() {
    //#####··········一创建就更新坐标··········#####//
    this.$emit("change", this.currentIndex);
  },
  methods: {
    //#####··········点击后跳转··········#####//
    fn(index) {
      this.currentIndex = index;
      this.$emit("change", index);
    },
  },
};
</script>
<style scoped lang="less">
.Elevator {
  display: flex;
  flex-direction: column;
  width: 100%;
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    color: #fff;
    transition: all 0.5s 0.1s;
    user-select: none;
  }
  .active {
    transition: all 0s;
    color: #000;
    background-color: #fff;
  }
}
</style>
