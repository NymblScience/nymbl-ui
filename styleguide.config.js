const path = require("path");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  require: [
    path.join(__dirname, "src/assets/styles.css"),
    path.join(__dirname, "src/assets/sass/main.scss")
  ],

  title: "Style Guide",
  components: "src/components/**/[A-Z]*.vue",
  defaultExample: false,
  exampleMode: "collapse",
  sections: [

    {
      name: "Style Guide",
      components: "src/style/**/[A-Z]*.vue",
      exampleMode: "hide", // 'hide' | 'collapse' | 'expand'
      usageMode: "hide" // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Components",
      components: "src/components/**/[A-Z]*.vue"
    }
  ],

  // webpackConfig: {
  //   // custom config goes here
  // }
  usageMode: "collapse",
  skipComponentsWithoutExample: true,
  theme: {
    spaceFactor: 1,
    baseBackground: "#fff",
    link: "#274e75",
    linkHover: "red",
    border: "#e0d2de",
    font: ["Roboto", "sans-serif"]
  },
  assetsDir: "src/assets/",
  template: {
    favicon: "/nymbl-ui/favicon.ico"
  },
  // Override Styleguidist components
	styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'ui/Logo'),
    StyleGuideRenderer: path.join(__dirname, 'ui/StyleGuide'),
    TableOfContentsRenderer: path.join(__dirname, 'ui/TableOfContents'),
    ComponentsListRenderer: path.join(__dirname, 'ui/ComponentsList'),
    LinkRenderer: path.join(__dirname, 'ui/Link')
    
    
    // SectionsRenderer: path.join(__dirname, 'styleguide/components/SectionsRenderer')
  }
};
