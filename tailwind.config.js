/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,pug}",
    "./layouts/**/*.vue",
    "./pages/**/*.{vue,pug}",
    "./sources/**/*.{vue,pug}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      cursive: ["Caprasimo", "cursive"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
