/// <reference types="vitest" />
import { defineConfig } from 'vite';

import unocss from '@unocss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), sveltekit()],
  test: {
    environment: 'jsdom',
  },
});
