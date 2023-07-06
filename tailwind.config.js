/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./app/**/*.{js,jsx,md,mdx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
