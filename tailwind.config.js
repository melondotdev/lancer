/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        darkblue: "#060b26",
        darkishblue: "#0F1B60",
        ssblue: "#0AAEFF",
        faded: "rgb(163, 162, 162)",
        lightgrey: "rgb(48, 48, 48)",
        lightbox: "rgb(0, 0, 0, 0.8)"
      },
      fontFamily: {
        anton: "Anton",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
