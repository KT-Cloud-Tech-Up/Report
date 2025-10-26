export type PostCreateDto = {
  title: string;
  content: string;
  author: string;
};

export interface CreatePostDto {
  postId: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}
