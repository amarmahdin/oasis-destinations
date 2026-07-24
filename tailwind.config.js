/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        E: '#27738E',
        surface: '#EDF5F9',
        accent: '#0047FF',
        success: '#0BAE7A',
      },
    },
  },
  plugins: [],
}