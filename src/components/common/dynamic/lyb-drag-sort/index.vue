<template>
  <div class="LybDragSort">
    <div class="transition-group" is="transition-group">
      <div
        class="box"
        :class="{ active: currentIndex == index }"
        @dragstart="dragstart(index)"
        @dragover="dragover($event, index)"
        @drop="drop(index)"
        @dragleave="dragleave"
        v-for="(item, index) in data"
        :key="item[id]"
      >
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    /* 数组元素的唯一值 */
    id: {
      type: String,
      default: "id",
    },
  },
  name: "LybDragSort",
  data() {
    return {
      fromIndex: 0,
      currentIndex: null,
    };
  },
  methods: {
    exchange(arr, index, target) {
      if (index > target) {
        arr.splice(target, 0, arr[index]);
        arr.splice(index + 1, 1);
      } else {
        arr.splice(target + 1, 0, arr[index]);
        arr.splice(index, 1);
      }
    },

    dragstart(index) {
      this.fromIndex = index;
    },

    dragover(e, index) {
      e.preventDefault();
      this.currentIndex = index;
    },

    drop(index) {
      this.currentIndex = null;
      this.exchange(this.data, this.fromIndex, index);
      this.$emit("sort-data", this.data);
    },

    dragleave() {
      this.currentIndex = null;
    },
  },
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.LybDragSort {
  .flex();
  width: 100%;
  height: 100%;
  .transition-group {
    .flex();
    flex-wrap: wrap;
    .box {
      transition: all 0.5s;
    }
  }
}
.active {
  transform: scale(1.25);
  opacity: 0.5;
}
</style>
