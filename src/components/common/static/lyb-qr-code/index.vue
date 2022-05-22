<template>
  <div class="LybQrCode">
    <img
      :src="imgUrl"
      :style="{
        width: size,
        height: size,
      }"
    />
    <vue-qr
      :logoSrc="icon"
      :callback="test"
      :text="text"
      :size="1000"
      :bindElement="false"
    />
  </div>
</template>
<script>
//https://gitee.com/mirrors_soldair/node-qrcode
//#####··········公共方法··········!//
//转二维码
import vueQr from "vue-qr";
export default {
  name: "LybQrCode",
  components: { vueQr },
  props: {
    //需要被转成二维码的文字，注：为空会报错，必须在使用出进行判断
    text: {
      type: String,
      default: "暂无数据",
    },
    icon: {
      default: require("./img/icon.png"),
    },
    size: {
      type: String,
      default: "25vh",
    },
  },
  data() {
    return {
      imgUrl: "",
    };
  },
  methods: {
    test(dataUrl) {
      this.imgUrl = dataUrl;
    },
  },
};
</script>
