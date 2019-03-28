module.exports = {
  // baseUrl: '/portal-core/'
  // publicPath: process.env.NODE_ENV === "production" ? process.env.BASE_URL : "/",
  // outputDir: "dist",

  // devServer: {
  //   https: true,
  //   open: true
  // },
  // pluginOptions: {
  //   webpackBundleAnalyzer: {
  //     openAnalyzer: false
  //   }
  // },
  // configureWebpack: {
  //   plugins: [new HtmlWebpackInlineSVGPlugin()]
  // },
  chainWebpack: config => {
   config.module.rule('eslint').use('eslint-loader').options({
     fix: true
   })
 },
};
