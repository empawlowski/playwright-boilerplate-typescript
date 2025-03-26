import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: [
      'allure-report/**',
      'allure-results/**',
      'package-lock.json',
      'playwright-report/**',
      'playwright-results/**',
      'test-results/**',
      'test-report/**',
      'e2e/output/**',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  tseslint.configs.recommended,
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
  eslintPluginPlaywright.configs['flat/recommended'],
  {
    rules: {
      'playwright/no-nested-step': 'off',
      'playwright/expect-expect': 'off',
      'playwright/no-skipped-test': 'off',
      'playwright/no-conditional-in-test': 'off',
    },
    settings: {
      playwright: {
        globalAliases: {
          test: ['setup'],
        },
      },
    },
  },
  eslintPluginPrettierRecommended,
]);
