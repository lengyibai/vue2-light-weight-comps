<template>
  <div class="demoFull flex">
    <span class="lyb" v-textHoverColor>冷弋白</span>
  </div>
</template>
<script>
export default {
  name: "TextHoverColor",
};
</script>
<style scoped lang="less">
.lyb {
  position: relative;
  font-size: 10vw;
  transform: translateY(-50%);
  color: #2980b9;
  cursor: pointer;
  user-select: none;
  -webkit-box-reflect: below -10px linear-gradient(transparent, transparent 1%, rgba(0, 0, 0, 0.25));
}
</style>
