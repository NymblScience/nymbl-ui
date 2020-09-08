const webpack = require('webpack');

module.exports = {
  devServer: {
    open: true,
    port: 8089,
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        APP_VER: JSON.stringify(require('./package.json').version),
      }),
    ],
    devtool: 'source-map',
  },
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true,
      });
  },
};
