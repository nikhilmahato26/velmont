/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Deep forest-green brand spine (used for dark sections + text accents)
        forest: {
          DEFAULT: "#0d1f15",
          950: "#0a180f",
          900: "#0d1f15",
          800: "#132318",
          700: "#1c3324",
          600: "#274a34",
        },
        // Warm champagne-gold accent
        gold: {
          DEFAULT: "#c9a96e",
          50: "#faf6ee",
          100: "#f3e9d4",
          200: "#e7d3a9",
          300: "#dcbd86",
          400: "#c9a96e",
          500: "#b8924f",
          600: "#9a7639",
          700: "#735730",
        },
        // Light editorial neutrals (the airy "card" surfaces from the reference)
        ivory: "#f7f5f0",
        sand: "#efece4",
        mist: "#e6e3db",
        ink: {
          DEFAULT: "#16201a",
          soft: "#3a443d",
          muted: "#6b7269",
        },
        alert: "#c0392b",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.18em",
        wide3: "0.12em",
      },
      maxWidth: {
        shell: "1440px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        card: "0 24px 70px -30px rgba(13,31,21,0.35)",
        soft: "0 18px 50px -24px rgba(13,31,21,0.28)",
        gold: "0 16px 50px -18px rgba(201,169,110,0.55)",
        pill: "0 8px 24px -10px rgba(13,31,21,0.25)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg, #e7d3a9 0%, #c9a96e 50%, #9a7639 100%)",
        "forest-grad": "linear-gradient(180deg, #132318 0%, #0a180f 100%)",
        "shell-grad": "linear-gradient(180deg, #e9e6df 0%, #f2efe9 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        bounceDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bounceDown: "bounceDown 1.6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
