module.exports = {
  singleQuote: true,
  printWidth: 100,
  plugins: ['prettier-plugin-svelte', '@trivago/prettier-plugin-sort-imports'],
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' },
    },
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '^\\$(.*)$', '^[./]'],
};
