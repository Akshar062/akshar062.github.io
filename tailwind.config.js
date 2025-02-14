/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#B026FF',
        'bright-red': '#FF0033',
        'dark-bg': '#0A0A0A',
        'darker-bg': '#050505',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #B026FF, 0 0 20px #B026FF, 0 0 30px #B026FF' },
          '100%': { textShadow: '0 0 20px #B026FF, 0 0 30px #B026FF, 0 0 40px #B026FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};