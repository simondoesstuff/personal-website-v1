/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1d202e',
        'card-primary': '#252a3f',
        'card-secondary': '#33384f',
        'sidebar': '#141620',
        'primary': '#2dc0e1',
        'secondary': '#6a7ac5',
        'white': '#d3d3ed',
      }
    }
  },
  plugins: []
};