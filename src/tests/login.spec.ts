import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
  test.only('Should login successfully with valid credentials', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/');
    await loginPage.login('user', 'password');

    console.log(page.url());

    expect(page.url()).toBe('https://demo.applitools.com/app.html');
  });
});
