/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#3C486B',
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false,
  }
}