module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  globals: {
    Vue: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-line-length": [ false ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

