<template>
  <div class="demoFull flex">
    <label for="a" class="btn">选择图片</label>
    <input
      v-show="false"
      type="file"
      id="a"
      v-imageOptimizer="{
        width: 1000, //压缩尺寸
        ratio: 1, //压缩率
        maxsize: 1024, //超过多大进行压缩
        /* 成功回调 */
        success,
      }"
    />
  </div>
</template>
<script>
export default {
  name: "ImageOptimizer",
  methods: {
    success(data, file, url) {
      alert("请打开控制台");
      console.log("form表单：", data);
      console.log("file类型：", file);
      console.log("base64：", url);
    },
  },
};
</script>
