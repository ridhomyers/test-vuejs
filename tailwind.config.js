/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx, vue}",
    "./pages/**/*.{js,ts,jsx,tsx, vue}",
    "./components/**/*.{js,ts,jsx,tsx, vue}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      md: { min: "768px" },
      // => @media (min-width: 767px) { ... }
      lg: { min: "1023px" },
      // => @media (min-width: 1023px) { ... }
    },
  },
  plugins: [],
};
