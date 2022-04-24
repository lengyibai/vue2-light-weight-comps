import axios from "axios";
import store from "@/store/index.js";
import Vue from "vue";

//#####··········域名管理··········#####//
// 通过 process.env.变量 来获取全局变量
const upload = axios.create({
  baseURL: process.env.VUE_APP_lxt,
  time: 10000,
});
const weather = axios.create({
  baseURL: "http://wthrcdn.etouch.cn",
  time: 10000,
});

const server = axios.create({
  baseURL: "http://wthrcdn.etouch.cn",
  time: 10000,
});

//#####·········配置默认请求··········#####//
//####········GET请求········####//
/**
 * @description: GET请求封装
 * @param {String} url /接口地址
 * @param {Object} params 请求参数
 * @param {Object} other header等其他属性存放
 * @return {Promise} 接口请求
 */
export function getReq(url, params, other = {}) {
  return weather({ method: "GET", url, params, ...other });
}

//####········POST请求········####//
/**
 * @description: POST请求封装
 * @param {String} url /接口地址
 * @param {Object} data 请求参数
 * @param {Object} other header等其他属性存放
 * @return {Promise} 接口请求
 */
export function postReq(url, data, other = {}) {
  return upload({ method: "POST", url, data, ...other });
}

//####········PUT请求········####//
export function putReq(url, data, other = {}) {
  return server({ method: "PUT", url, data, other });
}

//####········DELETE请求········####//
export function delReq(url, data, other = {}) {
  return server({ method: "DELETE", url, data, other });
}

let loading = null;
//#####·········拦截器··········#####//
//####·······请求拦截器········####//
server.interceptors.request.use((config) => {
  config.headers.authorization = localStorage.getItem("token");
  loading = Vue.prototype.$loading({
    lock: true,
    text: "Loading",
    spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  return config;
});
//####·······响应拦截器········####//
server.interceptors.response.use(
  (res) => {
    let code = res.data.code;
    if (res.data.code === 401001) {
      if (
        confirm(
          "您的身份验证已过期，即将跳转登录页？如果您正在发布内容，请点击取消进行保存",
        )
      ) {
        store.dispatch("clearToken");
      }
    } else if (code !== 0) {
      Vue.prototype.$message.error(res.data.msg);
    }
    loading.close();
    return res;
  },
  () => {
    loading.close();
    setTimeout(() => {
      Vue.prototype.$message.error("请求失败！");
    }, 500);
  },
);
