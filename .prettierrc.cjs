module.exports = {
  singleQuote: true,
  printWidth: 100,
  plugins: ['prettier-plugin-svelte', '@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^\\$(.*)$', '^[./]'],
  htmlWhitespaceSensitivity: 'ignore',
};
