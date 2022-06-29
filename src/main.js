import Vue from "vue";
import App from "./App";
Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//#####··········个人··········#####//
//####········个人组件
import "@/components/common/index.js";
//####        自定义指令
import "@/utils/directives.js";
//####······公共样式
import "@/assets/css/default.css";
import "@/assets/css/style.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
