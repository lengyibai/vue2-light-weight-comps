<template>
  <div class="demo demoFull flex">
    <div class="text" v-typewriterMultiple>
      这里是冷弋白，当前打字机支持换行，而CSS打字机通过设置step步长，只能单行显示。当前打字机原理即利用setInterval，将字符一个个追加进字符串，遇到，、。？！则会停顿750ms、250ms、1500ms、1000ms、1000ms。怎么样？是不是很智能？更多符号可自行修改源码。
    </div>
  </div>
</template>
<script>
export default {
  name: "TypewriterMultiple",
};
</script>
<style scoped lang="less">
.text {
  width: 75vw;
  font-size: 4vw;
  color: #fff;
  margin-bottom: 50px;
}
</style>
