/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#faf9f6',
          secondary: '#afaeac',
          tertiary: '#868584',
          accent: '#666469',
          button: '#353534',
          bg: '#121110',
          surface: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(226, 226, 226, 0.35)',
        }
      },
      fontFamily: {
        matter: ['Matter', 'system-ui', 'sans-serif'],
        'matter-sq': ['Matter SQ', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        geist: ['Geist Mono', 'monospace'],
        'matter-mono': ['Matter Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-2.4px',
        'tighter': '-0.96px',
        'tight': '-0.4px',
        'wide': '1.4px',
        'widest': '2.4px',
      },
      borderRadius: {
        'button': '50px',
        'card': '12px',
        'container': '14px',
      }
    },
  },
  plugins: [],
};
