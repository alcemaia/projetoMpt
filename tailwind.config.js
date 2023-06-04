/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#262668',
          200: '#262668',
          300: '#262668',
          400: '#262668',
          500: '#262668',
          600: '#262668',
          700: '#262668',
          800: '#262668',
          900: '#f9f9f7', //bg
        },
        // gray: {
        //   100: '#EBF1F5',
        //   200: '#D9E3EA',
        //   300: '#C5D2DC',
        //   400: '#9BA9B4',
        //   500: '#707D86',
        //   600: '#55595F',
        //   700: '#33363A',
        //   800: '#25282C',
        //   900: '#151719',
        // },
        // purple: {
        //   100: '#F4F4FF',
        //   200: '#E2E1FF',
        //   300: '#CBCCFF',
        //   400: '#ABABFF',
        //   500: '#8D8DFF',
        //   600: '#5D5DFF',
        //   700: '#4B4ACF',
        //   800: '#38379C',
        //   900: '#262668',
        // },
        custom: { 
          100: '#771408',
          200: '#082945',
          300: '#e9e9e2',
        },

        darkGray: {
          100: '#ffffff',
          200: '#c2c4c9',
          300: '#aeb0b7',
          400: '#262668',
          500: '#858893',
          600: '#717481',
          700: '#5d616f',
          800: '#484d5d',
          900: '#34394b',
        },
        purple: {
          100: '#ffffff',
          200: '#f1e8eb',
          300: '#e2d1d7',
          400: '#d4bac4',
          500: '#c5a3b0',
          600: '#9a5f74',
          700: '#771408',
          800: '#7d314d',
          900: '#6f1a39',
        },

        vermelho: {
          900: '#771819'
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}