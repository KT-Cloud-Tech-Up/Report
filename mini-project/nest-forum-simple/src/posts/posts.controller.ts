import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Query,
  Render,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { type PostCreateDto } from './dto/create-post.dto';
import { PostResponseDto } from './dto/post-response.dto';
import { CommentResponseDto } from 'src/comments/dto/comment-response.dto';
import { type PostUpdateDto } from './dto/update-post.dto';
import { ResponseDto } from 'src/common/dto/response.dto';
import { Paginator } from 'src/utils/paginator.module';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 게시글 생성 api
  @Render('layouts/main')
  @Post()
  createPost(
    @Body() postCreateDto: PostCreateDto,
  ): Promise<ResponseDto<string>> {
    console.log('[Api] 게시글 생성');
    console.log(postCreateDto);

    return this.postsService.createPost(postCreateDto);
  }

  // 게시글 목록 리스트 조회 api (검색 키워드, 페이지 번호 파라미터 받음)
  @Render('posts/list')
  @Get()
  getAllPosts(
    @Query('search') search?: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<ResponseDto<{ posts: PostResponseDto[]; paginator: Paginator }>> {
    console.log('[Api] 게시글 전체 조회');
    console.log(`검색 키워드 : ${search}, 페이지 : ${page}`);

    return this.postsService.getAllPosts(search || '', page, limit);
  }

  // 특정 게시글 상세 조회
  @Render('posts/detail')
  @Get('/:postId')
  getPost(
    @Param('postId') postId: string,
  ): Promise<
    ResponseDto<{ post: PostResponseDto; comments: CommentResponseDto[] }>
  > {
    console.log('[Api] 특정 게시글 상세 조회');
    console.log(`게시글 ID : ${postId}`);

    return this.postsService.getPost(postId);
  }

  // 특정 게시글 수정
  @Post('/update')
  updatePost(
    @Body() updatePostDto: PostUpdateDto,
  ): Promise<ResponseDto<PostResponseDto>> {
    console.log('[Api] 특정 게시글 수정');
    console.log(`게시글 ID : ${updatePostDto.postId}`);
    console.log(updatePostDto);

    return this.postsService.updatePost(updatePostDto);
  }

  // 특정 게시글 삭제
  @Post('/delete/:postId')
  deletePost(@Param('postId') postId: string): Promise<ResponseDto<string>> {
    console.log('[Api] 특정 게시글 삭제');
    console.log(`게시글 ID : ${postId}`);

    return this.postsService.deletePost(postId);
  }
}
