/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      yellow: colors.amber,
      orange: "#fb6e38",
      "orange-light": "#FDA42B",
    },

    extend: {
      boxShadow: {
        "xl-flat": "19px 19px 38px #202020, -19px -19px 38px #2c2c2c;",
        //"2.6px 4.9px 7.5px -44px rgba(251, 114, 58, 0.053),  21px 39px 60px -44px rgba(251, 114, 58, 0.17)",
        "extraLarge-flat": "11px 11px 130px 70px rgb(206 217 224 / 22%)",
      },
      keyframes: {
        "bounce-up": {
          "0%, 100%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(-0.5rem)" },
        },
      },
      animation: { "animate-bounce-up": "bounce-up 1s ease-in-out infinite" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
