/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "ui-sans-serif", "system-ui"],
      },
      colors: {
        orangeCustom: "hsl(25, 97%, 53%)",
        lightGrey: "hsl(217, 12%, 63%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontSize: {
        base: "15px",
        sm: "12px",
        lg: "18px",
        xl: "20px",
      },
    },
  },
  plugins: [],
};
