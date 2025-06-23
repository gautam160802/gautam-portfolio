import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  darkMode: "class",
  plugins: [react(), tailwindcss()],
  boxShadow: {
    glow: "0 0 10px 2px rgba(59,130,246,0.8)",
  },
});
