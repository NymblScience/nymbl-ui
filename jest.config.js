module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleNameMapper: {
    "^vue-material-design-icons/[a-zA-Z0-9$_-]+.vue$": "jest-transform-stub",
    // "^nymbl-ui": "jest-transform-stub",
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  transform: {
    "vee-validate/dist/rules": "babel-jest",
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: ["<rootDir>/src/**/*.(spec|test).(ts|js)"],
  transformIgnorePatterns: ['<rootDir>/node_modules/']

};
