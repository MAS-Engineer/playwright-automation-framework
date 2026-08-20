import type {
  Locator,
  Page
} from "@playwright/test";

export class SauceInventoryPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator(
      '[data-test="inventory-item"]'
    );
  }

  async goto(): Promise<void> {
    await this.page.goto("/inventory.html");
  }
}