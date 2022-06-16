<template>
  <div class="demoFull flex">
    <input type="text" v-model.number="num" />
    <LybCircularProgress v-model="num" />
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      num: 0,
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
