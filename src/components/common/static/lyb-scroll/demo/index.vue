<template>
  <div class="index">
    <LybScroll class="LybScroll">
      <div class="content">
        <h1 v-for="(item, index) in 100" :key="index">{{ item }}</h1>
      </div>
    </LybScroll>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #fff;
    }
  }
}
</style>
