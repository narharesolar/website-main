/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1a2340",
        yellow: "#f5a623",
      },
      fontFamily: {
        sans: ["'Nunito Sans'", "sans-serif"],
        display: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
