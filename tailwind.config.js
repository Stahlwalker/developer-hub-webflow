/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Retro terminal colors
        terminal: {
          green: '#00ff41',
          cyan: '#00ffff',
          magenta: '#ff00ff',
          yellow: '#ffff00',
          orange: '#ff8800',
        },
        // Retro CRT colors
        crt: {
          dark: '#0a0e27',
          darker: '#050810',
          glow: '#1a1f3a',
        },
        // Accent colors
        accent: {
          purple: '#a78bfa',
          pink: '#f472b6',
          blue: '#60a5fa',
        },
        // Webflow brand colors
        wf: {
          blue: '#146EF5',
          'blue-hover': '#0F5BD6',
          'blue-light': '#E8F0FE',
          dark: '#1A1A1A',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient': 'gradient 8s ease infinite',
        'flicker': 'flicker 0.15s infinite',
        'scan': 'scan 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor' },
          '100%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme(colors.terminal.cyan), 0 0 20px theme(colors.terminal.cyan)',
        'neon-green': '0 0 5px theme(colors.terminal.green), 0 0 20px theme(colors.terminal.green)',
        'neon-magenta': '0 0 5px theme(colors.terminal.magenta), 0 0 20px theme(colors.terminal.magenta)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
