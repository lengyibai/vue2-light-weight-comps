<template>
  <div class="demo demoFull flex">
    <div class="text" v-typewriterMultiple>
      这里是冷弋白，我这个打字机是支持换行的，不像CSS通过step设置步长，只能单行显示。我这个打字机的原理就是通过setInterval，把字符一个一个追加进字符串，遇到，、。？！就会停顿750ms、250ms、1500ms、1000ms、1000ms。怎么样？很智能吧！
    </div>
    <div class="single cursor" v-typewriterSingle>
      有光标的打字机只能单行显示
    </div>
  </div>
</template>
<script>
export default {
  name: "Typewriter",
};
</script>
<style scoped lang="less">
.demo {
  flex-direction: column;
}
.text {
  width: 75vw;
  font-size: 4vw;
  color: #fff;
  margin-bottom: 50px;
}

.single {
  height: 5vw;
  line-height: 5vw;
  padding-right: 5px;
  font-size: 5vw;
  border-right: 2px solid transparent;
  color: #fff;
}

.cursor {
  border-right-color: currentColor;
}
</style>
