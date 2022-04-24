<template>
  <div class="demo demoFull flex">
    <!-- 单文件上传 -->
    <div class="box flex">
      <LybUploadSingle
        :fileUrl.sync="single.fileUrl"
        @finish="LybUploadSingleFinish"
        fileName="冷弋白"
        id="a"
        url="https://jsonplaceholder.typicode.com/posts"
        v-if="single.isShow || single.fileUrl"
      />
      <span v-else>暂无图片</span>
      <span>{{ this.single.fileUrl }}</span>
    </div>
    <!-- 多文件上传 -->
    <div class="box flex">
      <LybUploadMultiple
        :files.sync="multiple.files"
        @finish="LybUploadMultipleFinish"
        id="b"
        url="https://jsonplaceholder.typicode.com/posts"
        v-if="multiple.isShow || multiple.files.length"
      />
      <span v-else>暂无图片</span>
      <span>{{ this.multiple.files }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      single: {
        fileUrl: "", //用来模拟异步请求获取头像
        isShow: false,
      },
      multiple: {
        files: [],
        isShow: false,
      },
    };
  },
  mounted() {
    /* 模拟异步请求图片 */
    setTimeout(() => {
      this.single.fileUrl = "http://lengyibai.gitee.io/img-bed/img/lyb.png";
      this.single.isShow = true;

      this.$set(this.multiple, "files", [
        {
          fileName: "图片1",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片2",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片3",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
      ]);
      this.multiple.isShow = true;
    }, 3000);
  },
  methods: {
    LybUploadSingleFinish(v) {
      console.log(this.single.fileUrl);
      console.warn(v);
    },
    LybUploadMultipleFinish(v) {
      console.log(this.multiple.files);
      console.warn(v);
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  flex-direction: column;
  color: #fff;
  .box {
    flex-direction: column;
    height: fit-content;
    margin: 25px 0;
  }
}
</style>
