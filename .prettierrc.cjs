module.exports = {
  singleQuote: true,
  printWidth: 100,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^\\$(.*)$', '^[./]'],
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
