/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#1A2332',
          dark: '#2C3E50',
          light: '#34495E',
        },
        'costa-blue': {
          DEFAULT: '#3498DB',
          light: '#5DADE2',
          lighter: '#AED6F1',
        },
        'costa-turquoise': '#1ABC9C',
        'costa-green': '#27AE60',
        'costa-orange': '#E67E22',
        'costa-red': '#E74C3C',
        'light-gray': {
          DEFAULT: '#F8F9FA',
          medium: '#ECF0F1',
          dark: '#BDC3C7',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
