<template>
  <div class="demo">
    <LybRange
      v-model="value"
      :showIcon="true"
      :size="50"
      :icon="require('./img/icon.svg')"
      :step="10"
    />
    <h1>{{ value }}</h1>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return { value: 0 };
  },
};
</script>
<style scoped lang="less">
.demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  font-size: 100px;
  height: 100%;
}
</style>
