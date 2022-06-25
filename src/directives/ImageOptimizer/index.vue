<template>
  <div class="demoFull flex">
    <div class="box">
      <span>压缩前大小：{{ beforeFile }}</span>
      <span>压缩后大小：{{ afterFile }}</span>
    </div>
    <label for="a" class="btn">选择图片</label>
    <input
      v-show="false"
      type="file"
      id="a"
      v-imageOptimizer="{
        width: 1000, //压缩尺寸
        ratio: 0.1, //压缩率
        maxsize: 1024, //超过多大进行压缩
        /* 成功回调 */
        success,
      }"
    />
  </div>
</template>
<script>
//#####··········公共方法··········#####//
//{ 字节转文件 }
import { $fmtByte } from "@/utils/lyb.js";
export default {
  name: "ImageOptimizer",
  data() {
    return {
      before_file: 0,
      after_file: 0,
    };
  },
  computed: {
    beforeFile() {
      return $fmtByte(this.before_file.size)[2];
    },
    afterFile() {
      return $fmtByte(this.after_file.size)[2];
    },
  },
  methods: {
    success(data, file, base, init) {
      this.before_file = init;
      this.after_file = file;
      console.log({ form表单: data, file类型: file, base64: base });
      const a = document.createElement("a");
      a.style.display = "none";
      a.download = "压缩图片.jpg";
      a.href = base;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
};
</script>
<style lang="less" scoped>
.demoFull {
  .box {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    span {
      color: #fff;
      font-size: 3vw;
    }
  }
}
</style>
