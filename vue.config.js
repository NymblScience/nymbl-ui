const webpack = require("webpack");

module.exports = {
  outputDir: "styleguide",
  publicPath: "/nymbl-ui/",
  devServer: {
    open: true,
    port: 8089
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        APP_VER: JSON.stringify(require("./package.json").version)
      })
    ],
    devtool: "source-map"
  },
  chainWebpack: config => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        };
      });

    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  }
};
