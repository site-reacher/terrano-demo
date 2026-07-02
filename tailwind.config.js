/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#EEF3F9',
          100: '#D5E0EE',
          200: '#AEC3DD',
          300: '#7FA0C9',
          400: '#4F7BAC',
          500: '#2D5A8A',
          600: '#1F456E',
          700: '#163A5C',
          800: '#102A43',
          900: '#0A1F33',
          950: '#061525',
        },
        blue: {
          50: '#EAF2FB',
          100: '#CAE0F6',
          200: '#98C5ED',
          300: '#67A9E3',
          400: '#3D8ED9',
          500: '#1976D2',
          600: '#155EAF',
          700: '#11498A',
          800: '#0D3566',
          900: '#082042',
        },
        gray: {
          50: '#F8F9FB',
          100: '#F1F3F7',
          200: '#E3E7EE',
          300: '#CBD2DC',
          400: '#A8B2BF',
          500: '#7C8694',
          600: '#5C6571',
          700: '#424A54',
          800: '#2D333B',
          900: '#1C2128',
        },
        success: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#43A047',
          600: '#2E7D32',
          700: '#1B5E20',
          800: '#0F3D13',
          900: '#062308',
        },
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(16, 42, 67, 0.06)',
        card: '0 4px 24px rgba(16, 42, 67, 0.08)',
        'card-hover': '0 12px 40px rgba(16, 42, 67, 0.14)',
        glow: '0 0 40px rgba(25, 118, 210, 0.25)',
        'inner-glow': 'inset 0 1px 2px rgba(255,255,255,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-in-right': 'slide-in-right 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
