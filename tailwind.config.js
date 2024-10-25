module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1242px',
    },
    colors: {
      transperent: 'transperent',
      current: 'currentColor',
      muted: '#6c757d',
      white: '#ffffff',
      dark: '#000',
      custom: '#0aa195',
      themedark: '#A5D126',
      light: '#A5D126',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
