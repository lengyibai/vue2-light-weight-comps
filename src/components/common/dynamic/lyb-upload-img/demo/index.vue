<template>
  <div class="demoFull flex">
    <LybUploadImg url="/upload" v-model="img_url" />
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      img_url: "",
    };
  },
  watch: {
    img_url(v) {
      console.log(v);
    },
  },
};
</script>
