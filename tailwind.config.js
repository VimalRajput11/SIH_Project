/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maroon': '#8B0000',
        'saffron': '#FF9933',
        'deep-blue': '#1E3A8A',
        'gold': '#FFD700',
        'light-gold': '#FFF8DC',
        'dark-maroon': '#660000',
        'light-blue': '#3B82F6',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B0000 0%, #1E3A8A 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FF9933 0%, #FFD700 100%)',
      },
      boxShadow: {
        'spiritual': '0 10px 25px rgba(139, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(255, 153, 51, 0.3)',
      },
      animation: {
        'mandala-rotate': 'mandalaRotate 120s linear infinite',
        'prayer-flag-wave': 'prayerFlagWave 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        mandalaRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        prayerFlagWave: {
          '0%, 100%': { transform: 'scaleY(1) translateY(0)' },
          '50%': { transform: 'scaleY(0.8) translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 153, 51, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(255, 153, 51, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}