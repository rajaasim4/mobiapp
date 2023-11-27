/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxl: { min: "1800px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      slg: { max: "991px" },
      md: { max: "768px" },
      sm: { max: "540px" },
      xsm: { max: "377px" },
    },
    extend: {
      colors: {
        medium_black: "#303030",
        gray_color: "#a7a7a7",
        primary_gray: "#ebebeb",
        main_bg: "#f4f6f8",
        cards_bg: "#f6f6f7",
      },
    },
  },
  plugins: [],
};
