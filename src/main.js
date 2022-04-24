import Vue from "vue";
import App from "./App";
Vue.config.productionTip = false;

//#####··········个人··········#####//
//####········个人组件
import lybUI from "@/components/common/index.js";
Vue.use(lybUI);
//####        自定义指令
import directives from "@/utils/directives.js";
Vue.use(directives);
//####······公共样式
import "@/assets/css/default.css";
import "@/assets/css/style.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
