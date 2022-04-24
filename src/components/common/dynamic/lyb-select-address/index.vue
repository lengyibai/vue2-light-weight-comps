<template>
  <el-cascader
    :options="address"
    :props="props"
    placeholder="选择地址"
    @change="handleChange"
    style="width: 100%"
  >
  </el-cascader>
</template>

<script>
import Vue from "vue";
import { Cascader } from "element-ui";
Vue.use(Cascader);
import address from "./address.js";
export default {
  name: "LybSelectAddress",
  data() {
    return {
      props: {
        value: "value",
        label: "text",
        children: "children",
      },
    };
  },
  computed: {
    address() {
      return address;
    },
  },
  methods: {
    handleChange(val) {
      this.$emit("code", val);
      this.$emit("chinese", val);
    },
  },
};
</script>
