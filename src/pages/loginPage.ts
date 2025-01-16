import { BasePage } from './basePage';
import { log } from '../utils/logger';
import { type Locator, type Page } from '@playwright/test';

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.usernameInput = page.locator("//input[contains(@id, 'username')]");
    this.passwordInput = page.locator("//input[contains(@id, 'password')]");
    this.submitButton = page.locator("//a[contains(@id, 'log-in')]");
  }

  async login(userName: string, password: string) {
    log('Fill username');
    await this.usernameInput.fill(userName);

    log('Fill password.');
    await this.passwordInput.fill(password);

    log('Click login button.');
    await this.submitButton.click();
  }
}
