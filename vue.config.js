module.exports = {
  devServer: {
    open: true,
    port: 8089
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: config => {

    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  }
};



