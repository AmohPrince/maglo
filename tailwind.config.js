/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        magloGreen: "#C8EE44",
        magloBlack: "#1c1a2e",
        magloSemiBlack: "#1e1c30",
        magloDashBoardTabsBlack: "#363a3f",
        magloGrey: "#626260",
        magloDarkBlue: "#282541",
        magloLightOrange: "#fff1e5",
        magloOrange: "#F2994A",
        magloLightGreen: "#D9FFE9",
        magloTextGreen: "#27AE60",
        magloLightRed: "#FFEFEF",
        magloRed: "#EB5757",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
