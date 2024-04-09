/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
      Sans: ["Open Sans"],
    },
    colors: {
      "gray-50": "#FBFBFB",
      "gray-800": "#28353D",
      "gray-600": "#576974",
      "orange-logo": "#FB8500",
      "orange-feature": "#FB850078",
      "orange-1": "#FCE0A2",
      hero: "#FB8500B8",
      white: "#FFFFFF",
      "black-1": "#2B2D42",
      "gray-6": "#666666",
      "gray-4": "#8A9CA7",
      "gray-1": "#7A7E86",
    },
  },
  plugins: [],
};
