import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://composeproof.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
