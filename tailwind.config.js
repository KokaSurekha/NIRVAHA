

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <-- include all your pages/components
  ],
  theme: {
    extend: {
      // You can define keyframes and animation here if you want Tailwind classes
      keyframes: {
        'slide-background': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slide-background': 'slide-background 60s linear infinite',
      },
    },
  },
  plugins: [],
};

