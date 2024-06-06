/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#24243f',
        light: '#b2c7ee',
        'dark-t': '#e3e3c0',
        purple: '#4A55A2',
        gray: '#b5bfc9',
        'gray-200': '#c2c2c4',
      },
      scale: {
        5: '1.005',
      },
    },
  },
  plugins: [],
};
