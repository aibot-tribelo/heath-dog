// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://aibot-tribelo.github.io',
  base: '/heath-dog',
  vite: {
    plugins: [tailwindcss()]
  }
});
