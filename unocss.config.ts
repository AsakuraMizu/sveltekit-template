import extractorSvelte from '@unocss/extractor-svelte';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { defineConfig } from '@unocss/vite';

export default defineConfig({
  extractors: [extractorSvelte],
  presets: [presetUno({ dark: 'media' }), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
