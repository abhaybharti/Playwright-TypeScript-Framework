import { defineConfig } from '@playwright/test';
import { ConfigManager } from './src/config/ConfigManager';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,

  fullyParallel: true,
  workers: ConfigManager.getWorkers(),

  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: ConfigManager.getBaseUrl(),
    headless: ConfigManager.isHeadless(),
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});