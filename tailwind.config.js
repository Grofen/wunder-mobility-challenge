/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main Colors
        black: "#1f1f1f",
        cream1: "#f8efea",
        cream2: "#fddfcd",
        "dark-blue": "#000d36",
        neutral1: "#e9edfb",
        purple: "#2648db",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
