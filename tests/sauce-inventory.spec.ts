import {
  test,
  expect
} from "../fixtures/sauce-fixtures";

test(
  "loads the authenticated inventory @smoke @regression",
  async ({ inventoryPage }) => {
    await expect(inventoryPage.page).toHaveURL(
      /inventory\.html/
    );

    await expect(inventoryPage.heading).toHaveText(
      "Products"
    );

    await expect(
      inventoryPage.inventoryItems.first()
    ).toBeVisible();
  }
);