<template>
  <div class="Elevator">
    <div
      class="page"
      :class="{
        activeStatic: currentTitle === item.name && item.type === 'static',
        activeDynamic: currentTitle === item.name && item.type === 'dynamic',
        activeDirective:
          currentTitle === item.name && item.type === 'directive',
        static: item.type === 'static',
        dynamic: item.type === 'dynamic',
        directive: item.type === 'directive',
      }"
      @click="fn(item.name)"
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
    title: {
      type: String,
      default: "",
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
      currentTitle: "全屏滚动",
    };
  },
  watch: {
    title(v) {
      this.currentTitle = v;
    },
  },
  created() {
    function $getPathParams() {
      let url = decodeURI(location.search);
      let params = {};
      if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
          params[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
      }
      return params;
    }
    this.currentTitle = $getPathParams().i || this.currentTitle;
    //#####··········一创建就更新坐标··········#####//
    this.$emit("change", this.currentTitle);
  },
  methods: {
    //#####··········点击后跳转··········#####//
    fn(title) {
      this.currentTitle = title;
      this.$emit("change", title);
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
