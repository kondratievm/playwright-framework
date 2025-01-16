import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getElementText(selector: string): Promise<string> {
    const text = await this.page.textContent(selector);
    if (text === null) {
      throw new Error(
        `Element with selector "${selector}" has no text content.`,
      );
    }
    return text;
  }
}
