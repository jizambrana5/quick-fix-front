// vite.config.js
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: process.env.VITE_API_BASE_URL || "https://35.193.174.196",
        changeOrigin: true,
        secure: false, // Ignora certificados SSL inválidos
        rewrite: (path) => path.replace(/^\/api/, ""), // Reescribe la ruta
      },
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@routes": "/src/routes",
    },
  },
  build: {
    outDir: "build",
  },
});
