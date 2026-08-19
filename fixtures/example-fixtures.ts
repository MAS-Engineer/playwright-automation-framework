import {
  test as base,
  expect
} from "@playwright/test";

import { ExamplePage } from "../pages/example-page";

type ExampleFixtures = {
  examplePage: ExamplePage;
};

export const test = base.extend<ExampleFixtures>({
  examplePage: async ({ page }, use) => {
    const examplePage = new ExamplePage(page);

    await examplePage.goto();
    await use(examplePage);
  }
});

export { expect };