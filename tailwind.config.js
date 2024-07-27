/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
