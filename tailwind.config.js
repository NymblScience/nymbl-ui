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
      roboto: ['Roboto', 'sans-serif'],

    },

    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.100', 'currentColor'),
    }),
    extend: {
      borderRadius: {

        sm: '0.4167rem',
        DEFAULT: '0.8333rem',
        xl: '1.2rem', // 30px
        xxl: '5.333rem', // 128px
      },
      screens: {
        xxs: '0px',
        xs: '320px',
      },
      fontSize: {
        xxs: '0.5833rem', // 14px
        xs: '0.75rem', // 18px
        sm: ' 0.8333rem', // 20px
        DEFAULT: '1rem', // 24px
        mdxl: '1.25rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      fontWeight: {

        bold: 600,
        extrabold: 700,
      },
      boxShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25)',
      },
      lineHeight: {
        3: '0.9583rem', // 23px
        4: '1.25rem', // 30px
        5: ' 1.542rem', // 37px
        6: ' 1.875rem', // 45px
        7: '2.317rem', // 55px
        8: '2.5rem', // 60px
      },

      colors: {

        green: {
          100: '#0C6A69',
          150: '#1C807E',
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
  plugins: [],
};
