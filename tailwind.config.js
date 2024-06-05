/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#24243f',
        light: '#7895CB',
        'dark-t': '#e3e3c0',
        gray: '#646972',
        purple: '#4A55A2',
      },
    },
  },
  plugins: [],
};
