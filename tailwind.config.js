/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors:{
        blue:{
          100: '#2C68F3',
          200: '#2C68F3',
          300: '#0d6efd',
        }
      }
    },
    
  },
  plugins: [],
}

