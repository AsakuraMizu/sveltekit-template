/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import unocss from '@unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), sveltekit()],
  test: {
    environment: 'jsdom',
  },
});
