/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        'Orange': '#ff7d1a',
        'PadeOrange': '#ffede0',
        

        'VeryDarkBlue': '#1d2025',
        'DarkGrayishBlue': '#68707d',
        'GrayishBlue': '#b6bcc8',
        'LightGrayishBlue': '#f7f8fd',
      },

      keyframes: {
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        slideUp: 'slideUp 1s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom-3': {
          clipPath: 'polygon(0% -4%, 60% 1%, 61% 34%, -1% 100%)',
        },
        '.clip-custom-1': {
          clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
