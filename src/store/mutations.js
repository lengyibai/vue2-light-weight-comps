import Vue from "vue";
import router from "@/router";
export default {
  // 设置token
  setToken(state, token) {
    state.token = token;
    window.localStorage.setItem("token", token);
  },
  // 设置用户信息
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    // 登录成功后设置状态
    state.userStatus = true;
  },
  // 退出登录清除token
  clearToken(state) {
    state.token = "";
    state.userStatus = false;
    state.userInfo = {};
    router.push("/login");
    window.localStorage.removeItem("token");
  },
  developing() {
    Vue.prototype.$message.warning("开发中...");
  },
};
