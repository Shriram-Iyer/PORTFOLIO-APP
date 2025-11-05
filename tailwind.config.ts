import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf5ff",
          100: "#d7e7ff",
          200: "#b4ceff",
          300: "#8bb1ff",
          400: "#5a86ff",
          500: "#3a64ff",
          600: "#2549db",
          700: "#1d3ab0",
          800: "#1c398a",
          900: "#1b346f"
        },
        accent: "#ff7f50"
      },
      backgroundImage: {
        "mesh-light": "radial-gradient(circle at 15% 20%, rgba(90,134,255,0.25), transparent 55%), radial-gradient(circle at 85% 0%, rgba(255,127,80,0.25), transparent 45%)",
        "mesh-dark": "radial-gradient(circle at 20% 20%, rgba(58,100,255,0.28), transparent 55%), radial-gradient(circle at 80% 0%, rgba(255,127,80,0.18), transparent 45%)"
      },
      boxShadow: {
        neon: "0 0 25px rgba(90,134,255,0.45)",
        "neon-subtle": "0 0 12px rgba(90,134,255,0.25)"
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 rgba(90,134,255,0.0)" },
          "50%": { boxShadow: "0 0 20px rgba(90,134,255,0.35)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.01)" }
        },
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        float: "float 12s ease-in-out infinite",
        "gradient-pan": "gradient-pan 14s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;
