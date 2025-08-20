import { Configuration } from '@_e2e/config/variables.config';
import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e/tests/',
  outputDir: 'e2e/output/test-result',
  globalSetup: './e2e/config/global-setup.ts',
  fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 1 : 0,
  // workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never', outputFolder: 'e2e/output/test-report' }],
    ['json', { open: 'never', outputFile: 'e2e/output/test-result/results.json' }],
    ['junit', { open: 'never', outputFile: 'e2e/output/test-result/results.xml' }],
  ],
  use: {
    // baseURL: process.env.CI ? process.env.PLAYWRIGHT_BASE_URL : 'http://localhost:3000',
    baseURL: Configuration.baseURL,
    trace: 'retain-on-failure',
    deviceScaleFactor: 1,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
