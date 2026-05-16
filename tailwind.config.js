/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1B3D', // navy electric blue
        foreground: '#f8fafc',
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          foreground: '#ffffff',
          dark: '#1d4ed8', // blue-700
        },
        secondary: {
          DEFAULT: '#8b5cf6', // violet-500
          foreground: '#ffffff',
          dark: '#6d28d9', // violet-700
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'rgba(15, 23, 42, 0.6)', // slate-900 with opacity
          border: 'rgba(51, 65, 85, 0.4)', // slate-700
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
