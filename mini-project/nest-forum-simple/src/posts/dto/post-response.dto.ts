export interface PostResponseDto {
  postId: string;
  title: string;
  content: string;
  author: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
