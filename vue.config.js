module.exports = {
  lintOnSave: false, // 关闭语法检查
  configureWebpack: {
    resolve: {
      alias: {
        components: resolve("src/components"),
        router: resolve("src/router"),
        pages: resolve("src/pages")
      }
    }
  }
};
