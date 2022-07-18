<template>
  <div class="IntoBox">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "IntoBox",
  props: {
    animate: {
      type: String | Function,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.intoBox {
  flex-shrink: 0;
  border: 1px solid #fff;
}
</style>
