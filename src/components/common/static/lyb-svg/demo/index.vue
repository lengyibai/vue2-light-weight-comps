<template>
  <div class="demo demoFull">
    <div class="flex">
      <LybSvg
        :svg="icon.wzry"
        color="red"
        enter-color="yellow"
        down-color="blue"
        size="250px"
        right="44px"
      />王者荣耀
    </div>
  </div>
</template>
<script>
import icon from "./svg/icon.js";
export default {
  name: "demo",
  computed: {
    icon() {
      return icon;
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 250px;
  overflow: auto;
}
</style>
