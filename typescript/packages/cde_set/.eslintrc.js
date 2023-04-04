module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    workingDirectory: './',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: [
      '@typescript-eslint',
      'eslint-comments',
      'import',
      'prettier',
      'simple-import-sort',
    ],
    extends: [
      'airbnb-typescript/base',
      'plugin:eslint-comments/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  };
  