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
        'dark-transp-purple': '#1c112aa1',
        'purp': '#38235d',
        'lightpink': '#9d6ded',
        'light-purple': '#311e49',
        'licorice': '#170a26',
        'light-pink': '#e654ff',
      },
      minHeight: {
        '3/4': '75vh',
      }
    },
  },
  plugins: [],
 
}