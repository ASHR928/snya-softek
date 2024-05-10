/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontSize: {
      xxss: "0.2rem",
      xxs: "0.5rem",
      sm: "0.6rem",
      xs: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "11rem",
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#04518A",
        tertiary: "#0871BE",
        dimBlue: "#42ADFB33",
        tcolor: "#636363",
        cdcolor: "#07547D",
        slcolor: "#0886E3",
        tbg: "#078BED",
        fbg: "#EBF7FF",
        circlebg: "rgba(246, 246, 246, 0.57)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      animation: {
        "border-spin": "border-spin 7s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
