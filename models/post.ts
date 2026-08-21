export interface CreatePostRequest {
  title: string;
  body: string;
  userId: number;
}

export interface Post extends CreatePostRequest {
  id: number;
}