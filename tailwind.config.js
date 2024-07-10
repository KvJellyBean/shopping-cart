/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Inconsolata", '"Lucida Console"', "sans-serif"],
      heading: ["Michroma", '"Lucida Console"', "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#3040D3",
      text: "#000000",
      background: "#FFFFFF",
    },
  },
  plugins: [],
};
