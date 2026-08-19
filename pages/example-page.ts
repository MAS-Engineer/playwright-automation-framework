import type { Locator, Page } from "@playwright/test";

export class ExamplePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly learnmoreLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", {
      name: "Example Domain"
    });
    this.learnmoreLink = page.getByRole("link", {
      name: /Learn more/i
    });
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }
}