<template>
  <div class="demoFull flex">
    <div class="LybVideo">
      <LybVideo :url="require('./video/video.mp4')" />
    </div>
  </div>
</template>
<script></script>
<style scoped lang="less">
.LybVideo {
  position: relative;
  width: 75%;
  height: 75%;
}
</style>
