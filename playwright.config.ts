import {
  defineConfig,
  devices
} from "@playwright/test";

import dotenv from "dotenv";

dotenv.config();

const todoBaseUrl = process.env.TODO_BASE_URL;

if (!todoBaseUrl) {
  throw new Error("TODO_BASE_URL is missing from the environment");
}

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

        baseURL:
          process.env.TODO_BASE_URL 
      }
    }
  ]
});