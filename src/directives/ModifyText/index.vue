<template>
  <div class="demoFull flex">
    <!-- 需要在外层再包一层盒子，都在会出现失去焦点错误 -->
    <div class="ModifyText" v-modifyText="[fn, 'lyb']">冷弋白</div>
  </div>
</template>
<script>
export default {
  name: "ModifyText",
  methods: {
    fn(value, name) {
      console.log(name + "：" + value);
    },
  },
};
</script>
<style scoped lang="less">
.ModifyText {
  position: relative;
  width: 50vw;
  height: 25vw;
  font-size: 3vw;
  border: 1px solid #fff;
  color: #fff;
}
</style>
