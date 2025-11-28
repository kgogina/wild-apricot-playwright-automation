import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // 30 seconds per test
  retries: 1,         // retry once on failure

  use: {
    headless: false,                 // show browser
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    launchOptions: {
      args: ['--start-maximized'],   // maximize Chrome window
    },

    viewport: null,                  // IMPORTANT: allow full window size
  },

  reporter: [['html', { open: 'never' }]],
});
