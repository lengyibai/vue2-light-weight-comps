<template>
  <div class="Elevator">
    <div
      class="page"
      :class="{
        activeStatic: currentIndex === index && item.type === 'static',
        activeDynamic: currentIndex === index && item.type === 'dynamic',
        activeDirective: currentIndex === index && item.type === 'directive',
        static: item.type === 'static',
        dynamic: item.type === 'dynamic',
        directive: item.type === 'directive',
      }"
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
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 10px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    color: #fff;
    transition: all 0.5s 0.1s;
    user-select: none;
  }
}

.activeStatic {
  background-color: #27ae60;
}
.activeDynamic {
  background-color: #2980b9;
}
.activeDirective {
  background-color: #f39c12;
}
.static {
  border-color: #27ae60 !important;
  &:hover {
    transition: all 0s;
    background-color: #27ae60;
  }
}
.dynamic {
  border-color: #2980b9 !important;
  &:hover {
    transition: all 0s;
    background-color: #2980b9;
  }
}

.directive {
  border-color: #f39c12 !important;
  &:hover {
    transition: all 0s;
    background-color: #f39c12;
  }
}
</style>
