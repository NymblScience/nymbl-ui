module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [    "airbnb-base",  'plugin:vue/recommended'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-line-length": [ false ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
