import type {
  APIRequestContext,
  APIResponse
} from "@playwright/test";

import type {
  CreatePostRequest,
  Post
} from "../models/post";

export interface ApiResult<T> {
  response: APIResponse;
  body: T;
}

export class JsonPlaceholderClient {
  constructor(
    private readonly request: APIRequestContext
  ) {}

  async getPost(
    postId: number
  ): Promise<ApiResult<Post>> {
    const response = await this.request.get(
      `/posts/${postId}`
    );

    const body = (await response.json()) as Post;

    return {
      response,
      body
    };
  }

  async createPost(
    postData: CreatePostRequest
  ): Promise<ApiResult<Post>> {
    const response = await this.request.post(
      "/posts",
      {
        data: postData
      }
    );

    const body = (await response.json()) as Post;

    return {
      response,
      body
    };
  }
}
