const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true, //转译的第三方依赖
  devServer: {
    proxy: {
      "/upload": {
        target: "http://125.70.9.252:8089",
        changeOrigin: true,
        pathRewrite: {
          "^/upload": "",
        },
      },
    },
  },
  publicPath: "./",
});
