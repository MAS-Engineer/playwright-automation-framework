import {
  defineConfig,
  devices
} from "@playwright/test";

import { environment } from "./config/environment";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  forbidOnly: Boolean(process.env.CI),

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ],

  use: {
    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure"
  },

  projects: [
  {
    name: "todo-chromium",
    testMatch: /todo-.*\.spec\.ts/,
    use: {
      ...devices["Desktop Chrome"],
      baseURL: environment.todoBaseUrl
    }
  },
  {
    name: "example-chromium",
    testMatch: /example-.*\.spec\.ts/,
    use: {
      ...devices["Desktop Chrome"],
      baseURL: environment.exampleBaseUrl
    }
  }
  ]
});