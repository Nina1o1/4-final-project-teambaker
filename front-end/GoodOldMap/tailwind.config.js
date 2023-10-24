
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "beige1": "#F8F0E5",
        "beige2": "#EADBC8",
        "beige3": "#DAC0A3",
        "navyBlue": "#0F2C59",
      },
      percentage: {
        "80%": "80%",
      }
    },
  },
  plugins: [],
}

