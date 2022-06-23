const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true, //转译的第三方依赖
  devServer: {
    proxy: {
      "/upload": {
        target: "https://s4.aconvert.com/convert/tools4.php",
        changeOrigin: true,
        pathRewrite: {
          "^/upload": "",
        },
      },
    },
  },
  publicPath: "./",
});
