import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aldefy.github.io',
  base: '/composeproof-website',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
