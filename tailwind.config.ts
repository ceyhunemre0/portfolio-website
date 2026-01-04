// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Retro-Futuristic Color Palette
        retro: {
          black: "#0a0a0f",
          dark: "#12121a",
          panel: "#1a1a28",
          chrome: "#c0c0c8",
          "chrome-bright": "#e8e8f0",
        },
        neon: {
          pink: "#ff2d75",
          "pink-dark": "#cc2460",
          cyan: "#00f0ff",
          "cyan-dark": "#00c0cc",
          purple: "#bf5fff",
          orange: "#ff6b35",
        },
        sunset: {
          purple: "#2d1b4e",
          magenta: "#6b2d5c",
          pink: "#d4447a",
          orange: "#ff8c42",
          yellow: "#ffd166",
        },
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        mono: ["JetBrains Mono", "var(--font-geist-mono)", "monospace"],
      },
      animation: {
        // Retro-Futuristic Animations
        "chrome-shimmer": "chromeShimmer 4s ease-in-out infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
        "neon-pulse-slow": "neonPulse 4s ease-in-out infinite",
        "float-retro": "floatRetro 6s ease-in-out infinite",
        "float-retro-delayed": "floatRetro 7s ease-in-out infinite 2s",
        "power-scan": "powerScan 0.6s ease-out",
        "scanline-sweep": "scanlineSweep 8s linear infinite",
        glitch: "glitch 0.3s ease-in-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "rotate-slow": "rotate 20s linear infinite",
        "perspective-tilt": "perspectiveTilt 0.5s ease-out",
      },
      keyframes: {
        chromeShimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        neonPulse: {
          "0%, 100%": {
            opacity: "1",
            filter: "brightness(1) drop-shadow(0 0 10px currentColor)",
          },
          "50%": {
            opacity: "0.8",
            filter: "brightness(1.3) drop-shadow(0 0 20px currentColor)",
          },
        },
        floatRetro: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) rotate(1deg)" },
          "50%": { transform: "translateY(-15px) rotate(-1deg)" },
          "75%": { transform: "translateY(-8px) rotate(0.5deg)" },
        },
        powerScan: {
          "0%": { top: "-100%", opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        scanlineSweep: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100px" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(0, 240, 255, 0.5), 0 0 80px rgba(0, 240, 255, 0.2)",
          },
        },
        perspectiveTilt: {
          "0%": {
            transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateY(5deg) rotateX(5deg)",
          },
        },
      },
      backgroundImage: {
        "gradient-sunset":
          "linear-gradient(180deg, #0a0a0f 0%, #1a1025 20%, #2d1b4e 40%, #6b2d5c 60%, #d4447a 80%, #ff8c42 95%)",
        "gradient-chrome":
          "linear-gradient(135deg, #606068 0%, #c0c0c8 25%, #e8e8f0 50%, #c0c0c8 75%, #606068 100%)",
        "gradient-neon-pink":
          "linear-gradient(135deg, #ff2d75 0%, #bf5fff 100%)",
        "gradient-neon-cyan":
          "linear-gradient(135deg, #00f0ff 0%, #00a8ff 100%)",
        "gradient-panel": "linear-gradient(180deg, #1a1a28 0%, #12121a 100%)",
        "grid-retro":
          "linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-pink":
          "0 0 20px rgba(255, 45, 117, 0.5), 0 0 40px rgba(255, 45, 117, 0.2)",
        "neon-pink-lg":
          "0 0 30px rgba(255, 45, 117, 0.6), 0 0 60px rgba(255, 45, 117, 0.3)",
        "neon-cyan":
          "0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.2)",
        "neon-cyan-lg":
          "0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.3)",
        chrome:
          "0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "retro-card":
          "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 240, 255, 0.1)",
      },
      borderRadius: {
        retro: "8px",
        "retro-lg": "12px",
      },
    },
  },
  plugins: [],
};
export default config;
