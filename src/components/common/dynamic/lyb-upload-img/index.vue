<template>
  <div class="LybUploadImg">
    <input type="file" id="file" v-show="false" @change="fn" />
    <img class="img" :src="value" v-if="value" />
    <label for="file" v-if="value && edit" class="op">
      <img src="./img/edit.svg" class="edit" alt="" />
    </label>
    <label for="file" class="add" v-if="edit && !value">
      <img src="./img/add.svg" alt="" />
    </label>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    edit: {
      type: Boolean,
      default: true,
    },
    url: {
      type: String,
      default: "",
    },
  },
  name: "LybUploadImg",
  data() {
    return {};
  },
  methods: {
    fn(e) {
      this.$editFile(e).then((res) => {
        console.log(res);
        alert(
          "上传成功，正常来讲成功后会显示图片、删除图片，但此处并没有图床接口",
        );
        this.$emit(
          "input",
          "把我改成后端文件链接地址字段，如res.data.data.src",
        );
      });
    },
    $editFile(file, url = this.url) {
      const data = new FormData();
      data.append("file", file.target.files[0]);
      return axios.post(url, data);
    },
  },
};
</script>
<style scoped lang="less">
.LybUploadImg {
  position: relative;
  width: 100px;
  height: 100px;
  outline: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: rgba(225, 225, 225, 0.25);
  }
  &:active {
    background-color: rgba(225, 225, 225, 0.5);
  }
  label {
    margin-bottom: 0;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .op {
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
      .edit {
        display: block;
      }
    }
    .edit {
      position: absolute;
      display: none;
      width: 100%;
      height: 100%;
      padding: 35px;
      z-index: 2;
      &:hover {
        background-color: rgba(0, 0, 0, 0.25);
      }
      &:active {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .add {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 35%;
      height: 35%;
    }
  }
}
</style>
