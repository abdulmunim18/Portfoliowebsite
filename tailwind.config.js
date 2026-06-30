/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Custom dark theme palette
        dark: {
          DEFAULT: '#0a0a0b',
          50: '#18181b',
          100: '#1c1c1f',
          200: '#232326',
          300: '#2c2c30',
          400: '#3f3f46',
          500: '#52525b',
          600: '#71717a',
          700: '#a1a1aa',
          800: '#d4d4d8',
          900: '#e4e4e7',
          950: '#fafafa',
        },
        // Accent: cyan-blue gradient palette
        accent: {
          DEFAULT: '#06b6d4',
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Secondary accent: violet
        secondary: {
          DEFAULT: '#8b5cf6',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'typing': 'typing 3.5s steps(30, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.15)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.2)',
        'glow-accent': '0 0 30px rgba(6, 182, 212, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(6, 182, 212, 0.05)',
      },
    },
  },
  plugins: [],
}
