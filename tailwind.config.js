/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'gray': {
            100: "#ddd",
            200: "#fef4f3",
            300: "#f7f7f7",
            400: "#cccccc",
            500: "#bebdbd"
          },
          'main': {
            DEFAULT: "#eb6753",
            black: ""
          },
          'black': {
            100: "#181A20",
            200: "#717171",
            300: "#222"
          },
          'yellow': {
            100: "#e59819"
          }
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dm_sans': ['DM Sans', 'sans-serif']
      },
      boxShadow: {
        'header0': "0 1px 4px #181a2012",
        'header': "0px 1px 4px rgba(24, 26, 32, 0.07)",
        'date': "0 6px 15px #404f680d"
      },
      fontSize: {
        '40': ['40px', '60px']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
