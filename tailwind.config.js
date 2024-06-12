/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#212126',
        light: '#e0e0e5',
        'dark-t': '#e3e3c0',
        purple: '#4A55A2',
        gray: '#b5bfc9',
        'gray-200': '#c2c2c4',
        'gray-300': '#626161',
        'gray-400': '#383838',
      },
      scale: {
        15: '1.015',
      },
    },
  },
  plugins: [],
};
