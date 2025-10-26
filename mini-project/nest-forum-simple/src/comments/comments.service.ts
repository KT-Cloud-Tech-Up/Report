import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments, CommentsDocument } from './schemas/comment.schema';
import { type CreateCommentDto } from './dto/create-comment.dto';
import { ResponseDto } from 'src/common/dto/response.dto';
import { type CommentResponseDto } from './dto/comment-response.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private commentModel: Model<CommentsDocument>,
  ) {}

  // 댓글 생성 service
  async createComment(
    createCommentDto: CreateCommentDto,
  ): Promise<ResponseDto<string>> {
    console.log('[Service] 댓글 생성');
    console.log(createCommentDto);

    try {
      const totalCommentCount = (await this.commentModel
        .countDocuments()
        .exec()) as number;

      const createDate = new Date().toISOString();

      // 댓글 고유 id 생성 후 데이터베이스에 저장
      if (totalCommentCount > 0) {
        const lastComment = (await this.commentModel
          .findOne()
          .sort({ createdAt: -1 })
          .lean()
          .exec()) as unknown as Comments;

        await this.commentModel.create({
          ...createCommentDto,
          commentId: (parseInt(lastComment.commentId) + 1).toString(),
          createdAt: createDate,
          modifiedAt: createDate,
        });
      } else {
        await this.commentModel.create({
          ...createCommentDto,
          commentId: '1',
          createdAt: createDate,
          modifiedAt: createDate,
        });
      }

      return Promise.resolve(ResponseDto.ok('댓글 생성 성공'));
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }

  // 게시글에 해당하는 댓글 목록 조회 service
  async getCommentsByPostId(
    postId: string,
  ): Promise<ResponseDto<CommentResponseDto[]>> {
    console.log('[Service] 게시글에 해당하는 댓글 목록 조회');
    console.log(`게시글 ID : ${postId}`);

    try {
      const comments = (await this.commentModel
        .find({ postId: postId })
        .sort({ createdAt: -1 })
        .lean()
        .exec()) as unknown as Comments[];

      const commentList = comments.map((eachComment) => {
        return {
          commentId: eachComment.commentId,
          content: eachComment.content,
          nickName: eachComment.nickName,
          postId: eachComment.postId,
          createdAt: eachComment.createdAt,
          modifiedAt: eachComment.modifiedAt,
        } as CommentResponseDto;
      });

      return Promise.resolve(ResponseDto.ok(commentList));
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }

  // 댓글 삭제 service
  async deleteComment(commentId: string): Promise<ResponseDto<string>> {
    console.log('[Service] 댓글 삭제');
    console.log(`댓글 ID : ${commentId}`);

    try {
      const result = await this.commentModel
        .deleteOne({ commentId: commentId })
        .exec();

      if (result.deletedCount > 0) {
        return Promise.resolve(ResponseDto.ok('댓글 삭제 성공'));
      } else {
        return Promise.resolve(
          ResponseDto.ok('삭제할 댓글이 존재하지 않습니다.'),
        );
      }
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }
}
