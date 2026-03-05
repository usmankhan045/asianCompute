import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",        // pure white base
        "bg-soft": "#F0FAF1",        // very faint green-white for alternate sections
        "bg-card": "#FFFFFF",        // card surfaces
        "bg-subtle": "#F8FFFE",        // teal-tinted subtle bg for special sections
        primary: "#3DB54A",        // brand green — unchanged
        secondary: "#1A5BB6",        // brand blue — unchanged
        accent: "#00A99D",        // brand teal — unchanged
        node: "#7B5EA7",        // purple node — unchanged, still sparingly
        cyan: "#00C8CC",        // bright cyan — unchanged
        text: "#0F1A0F",        // near-black with green undertone
        "text-muted": "#6B7280",      // medium gray for secondary text
        "text-body": "#374151",      // body text
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
