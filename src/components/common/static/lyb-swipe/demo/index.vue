<template>
  <div class="demo demoFull flex">
    <div class="swiper">
      <lybSwipe :isMultiple="true" />
    </div>
  </div>
</template>
<style scoped lang="less">
.demo {
  background-color: #222;
  .swiper {
    position: relative;
    height: 500px;
  }
}
</style>
