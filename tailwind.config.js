/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-bruno)", ...fontFamily.mono],
        sans: ["var(--font-nunito)", ...fontFamily.sans],
      },
      colors: {
        "almost-white": "#f3f3f3",
        "ani-indigo": "#0b0952",
        "ani-red": "#FD3F10",
        "ani-yellow": "#FED135",
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
        "jello-vertical": {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "40%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "50%": {
            transform: "scale3d(0.85, 1.15, 1)",
          },
          "65%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "75%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        "text-focus-in":
          "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "jello-vertical": "jello-vertical 0.9s both",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("@tailwindcss/typography"),
  ],
};
