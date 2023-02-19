/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
        spins: "spin 30s linear infinite",
        pulse: "pulse 1s linear infinite",
      },
    },
  },
  plugins: [],
}
