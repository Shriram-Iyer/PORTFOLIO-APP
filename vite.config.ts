import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Update the base path to match your GitHub repository name before deploying.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/PORTFOLIO-APP/",
  server: {
    port: 5173,
    open: true
  }
});
