import {
  test,
  expect
} from "../fixtures/example-fixtures";

test(
  "loads the Example website @smoke @regression",
  async ({ examplePage }) => {
    await expect(examplePage.heading).toBeVisible();
    await expect(examplePage.learnmoreLink).toBeVisible();
  }
);