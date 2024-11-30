/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#000000',
        'background-white': '#ffffff',
        'text-primary': '#333333',
        'text-secondary': '#666666',
        'accent-primary': '#000000',
        'accent-secondary': '#404040',
        'card-background': 'rgba(255, 255, 255, 0.9)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #000000, #121212)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideIn: {
          'from': {
            transform: 'translateX(-100px)',
            opacity: '0'
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
        glowPulse: 'glowPulse 2s infinite'
      },
      boxShadow: {
        'hover': '0 5px 15px rgba(0, 0, 0, 0.7)'
      },
      backdropBlur: {
        xs: '5px',
        sm: '10px'
      }
    },
  },
  plugins: [],
}