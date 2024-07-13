import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000, // Puedes cambiar el puerto si lo deseas
    open: true, // Abre el navegador automáticamente
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@routes': '/src/routes'
    },
  },
});
