module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '370px',
      sm: '575px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bgColor: {
          400: '#006B5A',
          100: '#FAFDFA',
        },
        textGray: {
          400: '#191C1B',
          100: '#FAFDFA',
          200: '#79747E',
          300: '#EDF0ED',
        },
        hover: '#DCE1FF',
      },
      fontSize: {
        '5xl': '57px',
      },
    },
  },
  plugins: [],
};
