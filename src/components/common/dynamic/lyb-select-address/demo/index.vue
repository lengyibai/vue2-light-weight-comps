<template>
  <div class="demoFull flex">
    <div class="LybSelectAddress">
      <LybSelectAddress v-model="code" />
      <h1>{{ code }}</h1>
      <LybSelectAddress v-model="chinese" :code="false" />
      <h1>{{ chinese }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      code: ["510000", "510100", "510107"],
      chinese: ["四川省", "自贡市", "自流井区"],
    };
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
