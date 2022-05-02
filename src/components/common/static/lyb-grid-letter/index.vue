<template>
  <div class="LybGridLetter" :style="{ gridArea: area }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    area: {
      type: String,
      default: "",
    },
  },
  name: "LybGridLetter",
};
</script>
<style scoped lang="less">
.LybGridLetter {
  width: 100%;
  height: 100%;
}
</style>
