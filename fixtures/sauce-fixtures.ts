import {
  test as base,
  expect
} from "@playwright/test";

import {
  SauceInventoryPage
} from "../pages/sauce-inventory-page";

type SauceFixtures = {
  inventoryPage: SauceInventoryPage;
};

export const test = base.extend<SauceFixtures>({
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new SauceInventoryPage(page);

    await inventoryPage.goto();
    await use(inventoryPage);
  }
});

export { expect };