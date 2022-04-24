<template>
  <div class="demoFull flex">
    <div class="LybScroll">
      <LybScroll top="100px">
        <div class="content">
          <h1 v-for="(item, index) in 100" :key="index">{{ item }}</h1>
        </div>
      </LybScroll>
    </div>
  </div>
</template>
<style scoped lang="less">
.LybScroll {
  position: relative;
  width: 50%;
  height: calc(100vh - 100px);
  border: 1px solid #fff;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #fff;
    }
  }
}
</style>
