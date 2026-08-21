import {
  test,
  expect
} from "@playwright/test";

import {
  JsonPlaceholderClient
} from "../clients/json-placeholder-client";

import type {
  CreatePostRequest
} from "../models/post";

test(
  "retrieves an existing post @api @regression",
  async ({ request }) => {
    const apiClient = new JsonPlaceholderClient(request);

    const {
      response,
      body
    } = await apiClient.getPost(1);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(body.title.length).toBeGreaterThan(0);
    expect(body.body.length).toBeGreaterThan(0);
  }
);

test(
  "creates a typed post @api @regression",
  async ({ request }) => {
    const apiClient = new JsonPlaceholderClient(request);

    const postData: CreatePostRequest = {
      title: "Playwright API framework",
      body: "Creates typed test data through an API client",
      userId: 1
    };

    const {
      response,
      body
    } = await apiClient.createPost(postData);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);

    expect(body.title).toBe(postData.title);
    expect(body.body).toBe(postData.body);
    expect(body.userId).toBe(postData.userId);
    expect(body.id).toEqual(expect.any(Number));
    }
);