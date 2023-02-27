const { typewindTransforms } = require("typewind/transform");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    transform: typewindTransforms,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
