/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'russian': '#1C113A',
        'dark-purple': '#1C112A',
        'licorice': '#170a26',
      },
      minHeight: {
        '3/4': '75vh',
      }
    },
  },
  plugins: [],
 
}