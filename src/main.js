import Vue from "vue";
import App from "./App";
import router from "./router";
// import store from './store';
Vue.config.productionTip = false;

//#####··········主要··········#####//
//####········Vant||Element
// import '@/plugins/vant/vantUI.js';
// import "@/plugins/element/index.js";
//####········VConsole
// import VConsole from 'vconsole';
// const vConsole = new VConsole();
// Vue.use(vConsole);

//#####··········项目独有··········#####//
//####········业务组件
// import uniqueComp from '@/components/business/index.js';
// Vue.use(uniqueComp);

//#####··········个人··········#####//
//####········个人组件
import lybUI from "@/components/common/index.js";
Vue.use(lybUI);
//####        自定义指令
import directives from "@/utils/directives.js";
Vue.use(directives);
//####······公共样式
import "@/styles/index.css";

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
