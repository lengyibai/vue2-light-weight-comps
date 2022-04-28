<template>
  <div class="demoFull">
    <div class="LybRichText">
      <LybRichText v-model="content" />
    </div>
    <p class="content" v-html="content"></p>
  </div>
</template>
<script>
import LybRichText from "../index.vue";
export default {
  name: "index",
  data() {
    return {
      content: "这是一个双向绑定的富文本",
    };
  },
  components: { LybRichText },
  watch: {
    content(v) {
      console.log(v);
    },
  },
};
</script>
<style scoped lang="less">
.demoFull {
  display: flex;
  flex-direction: column;
  align-items: center;
  .LybRichText {
    width: 75%;
    height: 35%;
    color: #fff;
  }
  .content {
    margin-top: 50px;
    width: 75%;
    min-height: 50%;
    color: #fff;
    border: 1px solid #fff;
  }
}
</style>
