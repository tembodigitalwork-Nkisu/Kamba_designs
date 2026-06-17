/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Editorial bridal palette — ivory ground, champagne mid, wine accent.
        ivory: {
          50: "#fbf7f0",   // page bg
          100: "#f5ede0",  // subtle alt surface (champagne)
          200: "#ece1cb",  // borders, dividers
          300: "#d8c8a8",
        },
        ink: {
          950: "#1a1410",  // primary text (warm near-black)
          900: "#2c241d",
          700: "#5b4d40",  // muted text
          500: "#8a7a6a",
        },
        wine: {
          800: "#6f1f2c",
          700: "#9c2d3b",  // accent — CTAs, eyebrows
          500: "#c66575",
          100: "#f4dde0",
        },
        gold: {
          600: "#9a7d4f",
          500: "#b89968",  // champagne gold
          300: "#d4b896",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        editorial: "0.18em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // Menu panel floats down and settles — luxe easing.
        menuIn: {
          "0%": { opacity: 0, transform: "translateY(-12px) scale(0.98)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        // Optional perpetual drift (barely-there).
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 600ms ease-out both",
        menuIn: "menuIn 420ms cubic-bezier(0.16, 1, 0.3, 1) both",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
