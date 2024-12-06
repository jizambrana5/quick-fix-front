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
        target: process.env.VITE_API_BASE_URL || "http://34.72.103.154:8080",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
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
