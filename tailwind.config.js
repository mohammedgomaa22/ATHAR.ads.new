/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003DFF',
        secondary: '#000000',
        light: '#FFFFFF',
      },

    },
  },
  plugins: [],
}