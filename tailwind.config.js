/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'primary-dark': '#000000',
        'dark-md': '#481E14',
        'dark-sm': '#9B3922',
        'dark-xs': '#F2613F',
        'font-primary': '#e5e7eb',
      },
    },
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          'primary-dark': '#000000',
          'dark-md': '#481E14',
          'dark-sm': '#9B3922',
          'dark-xs': '#F2613F',
          'font-primary': '#e5e7eb',
        },
      },
    ],
  },
};
