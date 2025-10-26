import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Render,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ResponseDto } from 'src/common/dto/response.dto';
import { type CreateCommentDto } from './dto/create-comment.dto';
import { type CommentResponseDto } from './dto/comment-response.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // 댓글 생성 api
  @Post()
  createComment(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<ResponseDto<string>> {
    console.log('[Api] 댓글 생성');
    console.log(createCommentDto);
    return this.commentsService.createComment(createCommentDto);
  }

  // 게시글에 해당하는 댓글 목록 조회 api
  @Get('/:postId')
  getCommentsByPostId(
    @Query('postId') postId: string,
  ): Promise<ResponseDto<CommentResponseDto[]>> {
    console.log('[Api] 게시글에 해당하는 댓글 목록 조회');
    console.log(`게시글 ID : ${postId}`);
    return this.commentsService.getCommentsByPostId(postId);
  }

  // 댓글 삭제 api
  @Post('/delete/:commentId')
  deleteComment(
    @Param('commentId') commentId: string,
  ): Promise<ResponseDto<string>> {
    console.log('[Api] 댓글 삭제');
    console.log(`댓글 ID : ${commentId}`);
    return this.commentsService.deleteComment(commentId);
  }
}
