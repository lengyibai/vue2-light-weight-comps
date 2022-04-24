<template>
  <div class="demoFull">
    <LybScroll class="LybScroll">
      <div class="content">
        <h1 v-for="(item, index) in 100" :key="index">{{ item }}</h1>
      </div>
    </LybScroll>
  </div>
</template>
<style scoped lang="less">
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #fff;
  }
}
</style>
