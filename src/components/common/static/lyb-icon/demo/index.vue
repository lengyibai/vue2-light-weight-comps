<template>
  <div class="demo">
    <div class="love flex">
      <LybIcon
        :imgUrl="require('./img/love.svg')"
        title="爱"
        size="250px"
        right="44px"
      />爱
    </div>
    <div class="love flex">
      <LybIcon
        :imgUrl="require('./img/love_gary.svg')"
        :imgUrlHover="require('./img/love_red.svg')"
        title="心"
        size="250px"
        right="44px"
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
.flex {
  display: flex;
  align-items: center;
}
.demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 250px;
  overflow: auto;
}
</style>
