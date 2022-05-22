<template>
  <div class="demoFull flex">
    <div class="btn" @click="Switch">{{ show ? "关闭" : "打开" }}</div>
    <LybIframe
      class="LybIframe"
      link="http://lengyibai.gitee.io/vue-library/preview/08"
      :show="show"
    />
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    Switch() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped lang="less">
.btn {
  position: fixed;
  top: 0;
  right: 0;
}
.LybIframe {
  width: 360px;
  height: 640px;
  background-color: #111;
}
</style>
