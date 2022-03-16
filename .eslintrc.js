module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    Vue: true,
    App: true,
    clevertap: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  rules: {
    "max-len": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: ["*.spec.js"],
      env: {
        jest: true,
      },
    },
  ],

};
