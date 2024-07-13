import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    vite: {
      optimizeDeps: {
        include: ['svelte-routing']
      }
    }
  }
};
