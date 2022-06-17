<template>
  <div class="demoFull flex">
    <input type="text" v-model.number="num" />
    <LybCircularProgress
      v-model="num"
      line-color="#3498db"
      line-bgc="#ccc"
      bg-color="#000"
      font-size="3vw"
      font-color="#3498db"
      size="25vw"
      thick="2.5vw"
    />
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      num: 50,
    };
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.demoFull {
  flex-direction: column;
  input {
    font-size: 2.5vw;
    margin-bottom: 50px;
  }
}
</style>
