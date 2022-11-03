/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1d202e',
        'sidebar': '#141620',
        'primary': '#1fa2d2',
        'accent': '#ea4444',
      }
    }
  },
  plugins: []
};