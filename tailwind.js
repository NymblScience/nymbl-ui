const Color = require('color');
// const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
// const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
  important: true,
  purge: [],
  theme: {
    fontFamily: {
      display: ['Source Sans Pro', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.100', 'currentColor'),
    }),
    extend: {
      colors: {

        green: {
          100: '#0C6A69',
          200: '#499998',
          300: '#7cb3b2',
          400: '#A4CCCB',
        },
        blue: {
          100: '#A6BFD5',
          150: '#2D9CDB',
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
          110: '#d9d9d9',
          150: lighten('#7A7A7A', 0.3),
          200: '#7A7A7A',
          300: '#4E4E4E',
          390: lighten('#222222', 0.3),
          400: '#222222',
        },
        red: {
          100: '#953232',
        },
      },

    },
  },
  variants: ['responsive', 'group-hover', 'hover', 'focus', 'active'],

  plugins: [],
};
