import heroui from '@heroui/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
