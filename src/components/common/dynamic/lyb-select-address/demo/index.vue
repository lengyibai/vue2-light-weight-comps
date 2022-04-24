<template>
  <div class="demoFull flex">
    <div class="LybSelectAddress">
      <LybSelectAddress @select-change="selectChangeCode" />
      <h1>{{ code }}</h1>
      <LybSelectAddress @select-change="selectChangeChinese" :code="false" />
      <h1>{{ chinese }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      code: "地理位置代码",
      chinese: "地理位置名称",
    };
  },
  methods: {
    selectChangeCode(v) {
      this.code = v;
    },
    selectChangeChinese(v) {
      this.chinese = v;
    },
  },
};
</script>
<style scoped lang="less">
.LybSelectAddress {
  width: 50%;
}
h1 {
  color: #fff;
}
</style>
