<template>
  <div class="demo demoFull">
    <div class="love flex">
      <LybIcon
        :imgUrl="require('./img/love.svg')"
        title="爱"
        size="10vw"
        right="2vw"
      />爱
    </div>
    <div class="love flex">
      <LybIcon
        :imgUrl="require('./img/love_gary.svg')"
        :imgUrlHover="require('./img/love_red.svg')"
        title="心"
        size="10vw"
        right="2vw"
      />爱
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 10vw;
  overflow: auto;
}
</style>
