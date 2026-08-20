import {
  test as setup,
  expect
} from "@playwright/test";

import { environment } from "../config/environment";
import { SauceLoginPage } from "../pages/sauce-login-page";

const authFile = "playwright/.auth/sauce-user.json";

setup(
  "authenticates the SauceDemo user",
  async ({ page }) => {
    const loginPage = new SauceLoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      environment.sauceUsername,
      environment.saucePassword
    );

    await expect(page).toHaveURL(/inventory\.html/);

    await expect(
      page.locator('[data-test="title"]')
    ).toHaveText("Products");

    await page.context().storageState({
      path: authFile
    });
  }
);