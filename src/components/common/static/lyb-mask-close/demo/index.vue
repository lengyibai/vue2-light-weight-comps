<template>
  <div class="demo demoFull">
    <LybMaskClose @close="alert('关闭回调')" />
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.demo {
  background-color: #ccc;
}
</style>
