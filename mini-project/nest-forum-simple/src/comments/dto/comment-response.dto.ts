export interface CommentResponseDto {
  commentId: string;
  content: string;
  nickName: string;
  postId: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
