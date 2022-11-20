/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1420px',
      },
      colors: {
        'main-color': '#2464AB',
        'second-color': '#2464AB',
        'alert-color':'#AB2424',
        'succes-color':'#27AB24',
        'text-first' : '#A3A3A3',
      },
    },
  },
  plugins: [],
}
