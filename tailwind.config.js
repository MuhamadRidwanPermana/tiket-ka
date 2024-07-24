/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      'primary': "#002662",
      'secondary': "#36ABA5",
      text: {
        "primary-light": "#FFFFFF",
        "secondary-light": "#4A505C",
        "disabled-light": "#6C717A",
        "primary-dark": "#1D2433",
        "secondary-dark": "#4A505C",
        "disabled-dark": "#6C717A",
      },
      bg: {
        'primary': "#fff",
        'secondary': "#F1F3F9",
        'base': "#F8F9FC",
      },
      "border-color": "#F1F1F1",
    },
  },
  plugins: [],
};
