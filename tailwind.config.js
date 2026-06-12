/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          900: '#050505',
          950: '#020202',
        },
        neon: {
          purple: '#A855F7',
          blue: '#06B6D4',
          pink: '#EC4899',
          cyan: '#00D9FF',
        },
        light: {
          bg: '#FAFAF9',
          card: '#F5F5F4',
          text: '#1F2937',
          'text-secondary': '#6B7280',
          border: '#E7E5E4',
          'card-hover': '#EEEBE8',
        },
        dark: {
          bg: '#0F0F0F',
          card: '#1A1A1A',
          text: '#FFFFFF',
          'text-secondary': '#A3A3A3',
          border: '#333333',
          'card-hover': '#252525',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(236, 72, 153, 0.5)',
        'glow-lg': '0 0 40px rgba(236, 72, 153, 0.6)',
        'glow-blue': '0 0 20px rgba(236, 72, 153, 0.5)',
        'glow-blue-lg': '0 0 40px rgba(236, 72, 153, 0.6)',
        'neon-inner': 'inset 0 0 20px rgba(236, 72, 153, 0.3)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      backdropBlur: {
        sm: '4px',
        md: '12px',
        lg: '20px',
        xl: '40px',
      },
    },
  },
  plugins: [],
}
