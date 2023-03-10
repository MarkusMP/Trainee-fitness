/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "#f13a11",
      white: "#ffffff",
      dark: "#171819",
      aboutBg: "#f9f9f9",
      gray: "#909090",
      link: "#404040",
      p: "#666262",
    },
  },
  plugins: [],
};
