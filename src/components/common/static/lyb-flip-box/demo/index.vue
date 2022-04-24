<template>
  <div class="demo demoFull">
    <div class="lybFlipBox">
      <LybFlipBox>
        <template #z>
          <div class="box flex">这里是正面</div>
        </template>
        <template #f>
          <div class="box flex">这里是反面</div>
        </template>
      </LybFlipBox>
    </div>
  </div>
</template>
<style scoped lang="less">
.demo {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .lybFlipBox {
    position: relative;
    width: 50%;
    height: 50%;
    .box {
      width: 100%;
      height: 100%;
      font-size: 50px;
      border: 5px solid #fff;
    }
  }
}
</style>
