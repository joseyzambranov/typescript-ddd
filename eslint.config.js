import eslintConfigCodely from "eslint-config-codely";

export default [
  ...eslintConfigCodely.ts,
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn'
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  }
];