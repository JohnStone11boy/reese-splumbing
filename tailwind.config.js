/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eef5',
          100: '#c5d5e8',
          200: '#9eb9d9',
          300: '#779dca',
          400: '#5888bf',
          500: '#3872b4',
          600: '#2a5f9e',
          700: '#1a4d7e',
          800: '#143B63',
          900: '#0d2a4a',
          950: '#071829',
        },
        brand: {
          DEFAULT: '#1E88E5',
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#1E88E5',
          600: '#1976d2',
          700: '#1565c0',
          800: '#0d47a1',
          900: '#0a3880',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'scroll-left': 'scrollLeft 40s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(20,59,99,0.92) 0%, rgba(30,136,229,0.75) 100%)',
        'navy-gradient': 'linear-gradient(135deg, #143B63 0%, #1a4d7e 100%)',
        'brand-gradient': 'linear-gradient(135deg, #1E88E5 0%, #1565c0 100%)',
      },
    },
  },
  plugins: [],
};
