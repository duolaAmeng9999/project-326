const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false, // 关闭语法检查
  configureWebpack: {
    resolve: {
      alias: {
        components: resolve("src/components"),
        pages: resolve("src/pages"),
        router: resolve("src/router"),
        store: resolve("src/store")
      }
    }
  }
};
