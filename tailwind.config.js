

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // existing animation
        'slide-background': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        // ✅ NEW FLOAT ANIMATIONS
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatDown: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(16px)" },
        },
      },

      animation: {
        'slide-background': 'slide-background 60s linear infinite',

        // ✅ NEW ANIMATION CLASSES
        'float-up': 'floatUp 6s ease-in-out infinite',
        'float-down': 'floatDown 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
