module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.100', 'currentColor'),
    }),
    extend: {
      colors: {
        green: {
          100: '#1B807E',
          200: '#499998',
          300: '#7cb3b2',
          400: '#A4CCCB',
        },
        blue: {
          100: '#A6BFD5',
          200: '#7A9FC1',
          300: '#4D7FAC',
          400: '#215F97',
        },
        'light-blue': {
          100: '#A5DDF3',
          200: '#77CCEE',
          300: '#4ABBE8',
          400: '#1DAAE2',
        },
        gray: {
          100: '#EBEBEB',
          200: '#7A7A7A',
          300: '#4E4E4E',
          400: '#222222',
        },
      },

    },
  },
  variants: {},
  plugins: [],
};
