/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#fdf8ed',
          100: '#f9eccc',
          200: '#f3d088',
          300: '#edb544',
          400: '#e79b13',
          500: '#d68108',
          600: '#b35f07',
          700: '#8f420b',
          800: '#753610',
          900: '#632d11'
        },
        secondary: {
          50: '#f9f6f1',
          100: '#e8d9c5',
          200: '#d7b794',
          300: '#c69468',
          400: '#b57647',
          500: '#995d35',
          600: '#7d4728',
          700: '#63351f',
          800: '#4f291a',
          900: '#402116'
        }
      }
    },
  },
  plugins: [],
}

