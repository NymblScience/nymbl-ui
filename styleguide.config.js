const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  require: [
    path.join(__dirname, "src/assets/styles.css"),
    path.join(__dirname, "src/assets/sass/main.scss")
  ],

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },

        {
          test: /\.svg$/,
          loader: "vue-svg-loader"
        },
        {
          test: /\.(ico|jpg|png)$/,
          loader: "file-loader"
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  // set your styleguidist configuration here
  title: "Nymbl Style Guide",
  components: "src/components/**/[A-Z]*.vue",
  defaultExample: false,
  exampleMode: "expand",
  sections: [
    {
      name: "Components",
      components: "src/components/**/[A-Z]*.vue"
    }
    // {
    //   name: 'Icons',
    //   components: 'src/components/**/[D-Z]*.vue'
    // }
  ],

  // webpackConfig: {
  //   // custom config goes here
  // }
  usageMode: "expand",
  skipComponentsWithoutExample: true,
  theme: {
    spaceFactor: 1,
    baseBackground: "red",
    link: "#274e75",
    linkHover: "#90a7bf",
    border: "#e0d2de",
    font: ["Roboto", "sans-serif"]
  },
  assetsDir: "src/assets/",
  template: {
    favicon: "/nymbl-ui/favicon.ico"
  }
};
