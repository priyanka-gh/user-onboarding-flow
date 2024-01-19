/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    colors: {
      colorPurple: "#624edd",
      gray: "#f3f4f6",
      lightGray: "#d1d5db",
      darkGray: "#9ca3af",
      darkerGray: "#6b7280",
      darkestGray: "#4b5563",
      white: "#ffffff",
    },
  },
  plugins: [],
};
