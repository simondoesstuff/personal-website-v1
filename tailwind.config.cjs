/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2dc0e1',
        'primary-light': '#63e1fd',
        'primary-dark': '#154c58',

        'primary-bg': '#1d202e',
        'bg-light': '#2f354f',
        'bg-dark': '#141620',

        'accent-red': '#e12d87',
        'accent-yellow': '#9668e6',
        'accent-green': '#2de190',

        'white': '#d3d3ed',
        'vanilla': '#60678b',
      }
    }
  },
  plugins: []
};