import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Загружаем переменные окружения из .env
dotenv.config();

const baseURL = process.env.BASE_URL;

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports' }],
    ['allure-playwright'],
  ],
  use: {
    baseURL: baseURL || 'http://localhost:3000', // Значение по умолчанию, если BASE_URL не определён,
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
