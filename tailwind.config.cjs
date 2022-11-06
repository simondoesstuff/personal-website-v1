/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1d202e',
        'bg-light': '#2f354f',
        'sidebar': '#141620',
        'primary': '#2dc0e1',
        'primary-light': '#63e1fd',
        'primary-dark': '#154c58',
        'white': '#d3d3ed',
      }
    }
  },
  plugins: []
};