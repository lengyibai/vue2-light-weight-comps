<template>
  <div class="demo">
    <LybQrCode
      text="https://wpa.qq.com/msgrd?v=3&uin=1329670984&site=qq&menu=yes"
      :icon="require('./img/icon.png')"
      :size="500"
    />
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
