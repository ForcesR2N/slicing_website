/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: '#f97316', 
        dark: '#0b1020' 
      },
      fontFamily: { 
        heading: ['Poppins', 'system-ui', 'sans-serif'], 
        body: ['Inter', 'system-ui', 'sans-serif'] 
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 2s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1.0' },
        },
      },
    },
  },
  plugins: [],
}