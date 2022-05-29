<template>
  <div class="demo demoFull flex">
    <div class="single cursor" v-typewriterSingle>
      单行打字机支持显示光标，以及打字和删除时光标不闪烁
    </div>
  </div>
</template>
<script>
export default {
  name: "Typewriter",
};
</script>
<style scoped lang="less">
.single {
  height: 5vw;
  line-height: 5vw;
  padding-right: 5px;
  font-size: 3vw;
  border-right: 2px solid transparent;
  color: #fff;
}

.cursor {
  border-right-color: currentColor;
}
</style>
