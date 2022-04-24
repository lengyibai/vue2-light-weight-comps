<template>
  <LybFlipBox class="LybFlipBox">
    <template #z>
      <div class="box">这里是正面</div>
    </template>
    <template #f>
      <div class="box">这里是反面</div>
    </template>
  </LybFlipBox>
</template>
<style scoped lang="less">
.LybFlipBox {
  width: 50%;
  height: 50%;
  color: #fff;
  .box {
    height: 100%;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #fff;
  }
}
</style>
