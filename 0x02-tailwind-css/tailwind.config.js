/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust path to match your project structure
    "./public/index.html",
    "../0x02-tailwind-css/**/*/.{html, js, jsx, ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}