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
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("@tailwindcss/typography"),
  ],
};
