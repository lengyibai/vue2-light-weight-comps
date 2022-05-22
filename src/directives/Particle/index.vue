<template>
  <div class="demoFull flex">
    <div class="btn" v-particle="{ size: 50 }">冷弋白</div>
  </div>
</template>
<script>
export default {
  name: "Particle",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.btn {
  position: relative;
  font-size: 10vw;
  font-weight: lighter;
}
</style>
