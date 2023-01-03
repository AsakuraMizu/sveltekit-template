import { defineConfig } from '@unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  extractors: [extractorSvelte],
  presets: [presetUno({ dark: 'media' }), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
