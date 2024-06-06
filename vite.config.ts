import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), icons({ compiler: 'svelte' })],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
