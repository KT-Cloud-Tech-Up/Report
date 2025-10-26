import { type PostCreateDto } from './dto/create-post.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Posts, PostsDocument } from './schemas/post.schema';
import {
  Comments,
  CommentsDocument,
} from 'src/comments/schemas/comment.schema';
import { PostResponseDto } from './dto/post-response.dto';
import { type PostUpdateDto } from './dto/update-post.dto';
import { ResponseDto } from 'src/common/dto/response.dto';
import { PaginatorModule, Paginator } from '../utils/paginator.module';
import { CommentResponseDto } from 'src/comments/dto/comment-response.dto';

@Injectable()
export class PostsService {
  // Posts 모델 주입
  constructor(
    @InjectModel(Posts.name) private postModel: Model<PostsDocument>,
    @InjectModel(Comments.name) private commentModel: Model<CommentsDocument>,
  ) {}

  // 게시글 생성 service
  async createPost(postCreateDto: PostCreateDto): Promise<ResponseDto<string>> {
    console.log('[Service] 게시글 생성');
    console.log(postCreateDto);

    try {
      const totalPostCount = (await this.postModel
        .countDocuments()
        .exec()) as number;

      // 게시글 생성 객체에 고유 id 추가하여 데이터베이스에 저장
      if (totalPostCount > 0) {
        const lastPost = (await this.postModel
          .findOne()
          .sort({ createdAt: -1 })
          .lean()
          .exec()) as unknown as Posts;
        const createPostId = parseInt(lastPost.postId) + 1;

        this.postModel.create({
          ...postCreateDto,
          postId: createPostId.toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } else {
        this.postModel.create({
          ...postCreateDto,
          postId: '1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }

      return Promise.resolve(ResponseDto.ok('게시글 생성 성공'));
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }

  // 게시글 목록 리스트 조회
  async getAllPosts(
    search: string,
    page: number,
    limit: number,
  ): Promise<ResponseDto<{ posts: PostResponseDto[]; paginator: Paginator }>> {
    console.log('[Service] 게시글 전체 조회');
    console.log(`검색 키워드 : ${search}, 페이지 : ${page}`);

    try {
      // 검색 키워드 유무에 따른 쿼리 조건 생성
      const query =
        search !== '' ? { title: { $regex: search, $options: 'i' } } : {};

      // 실제 데이터베이스에서 게시글 목록 조회
      const posts = (await this.postModel
        .find(query)
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 })
        .lean()
        .exec()) as unknown as Posts[];

      // 가져온 게시글 목록 리스트를 반환 DTO 객체 리스트로 변환
      const postList = posts.map((eachPost) => {
        return {
          postId: eachPost.postId,
          title: eachPost.title,
          content: eachPost.content,
          author: eachPost.author,
          createdAt: new Date(eachPost.createdAt as Date),
          modifiedAt: new Date(eachPost.modifiedAt as Date),
        } as PostResponseDto;
      });

      // 총 게시글 갯수 조회
      const totalCount = await this.postModel.countDocuments(query);
      // 페이징 처리
      const paginator = PaginatorModule.getPaginatory(totalCount, page, limit);
      const response = { posts: postList, paginator: paginator };

      return Promise.resolve(ResponseDto.ok(response));
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }

  // 특정 게시글 상세 조회 service
  async getPost(
    postId: string,
  ): Promise<
    ResponseDto<{ post: PostResponseDto; comments: CommentResponseDto[] }>
  > {
    console.log('[Service] 특정 게시글 상세 조회');
    console.log(`게시글 ID : ${postId}`);

    try {
      // 실제 데이터 베이스에서 선택한 특정 게시글 데이터 호출
      const post = (await this.postModel
        .findOne({ postId: postId })
        .lean()
        .exec()) as unknown as Posts;

      // 가져온 게시글 데이터를 반환 DTO 객체에 추가
      const postResponse: PostResponseDto = {
        postId: post.postId,
        title: post.title,
        content: post.content,
        author: post.author,
        createdAt: new Date(post.createdAt as Date),
        modifiedAt: new Date(post.modifiedAt as Date),
      };

      const comments = (await this.commentModel
        .find({ postId: postId })
        .lean()
        .exec()) as unknown as Comments[];

      const commentsResponse = comments.map((eachComment) => {
        return {
          commentId: eachComment.commentId,
          content: eachComment.content,
          nickName: eachComment.nickName,
          postId: eachComment.postId,
          createdAt: new Date(eachComment.createdAt as Date),
          modifiedAt: new Date(eachComment.modifiedAt as Date),
        } as CommentResponseDto;
      });

      return Promise.resolve(
        ResponseDto.ok({ post: postResponse, comments: commentsResponse }),
      );
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }

  // 특정 게시글 수정
  async updatePost(
    updatePostDto: PostUpdateDto,
  ): Promise<ResponseDto<PostResponseDto>> {
    console.log('[Service] 특정 게시글 수정');
    console.log(updatePostDto);

    try {
      // 실제 데이터 베이스에서 수정할 게시글 데이터 조회
      const post = (await this.postModel
        .updateOne(
          { postId: updatePostDto.postId },
          {
            $set: {
              title: updatePostDto.title,
              content: updatePostDto.content,
              modifiedAt: new Date().toISOString(),
            },
          },
        )
        .lean()
        .exec()) as unknown as Posts;

      // 수정된 게시글 데이터를 반환 DTO 객체에 추가
      const postResponse: PostResponseDto = {
        postId: post.postId,
        title: post.title,
        content: post.content,
        author: post.author,
        createdAt: post.createdAt,
        modifiedAt: post.modifiedAt,
      };

      return Promise.resolve(ResponseDto.ok(postResponse));
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }

  // 특정 게시글 삭제
  async deletePost(postId: string): Promise<ResponseDto<string>> {
    console.log('[Service] 특정 게시글 삭제');
    console.log(`게시글 ID : ${postId}`);

    try {
      const commentCount = await this.commentModel
        .countDocuments({ postId: postId })
        .exec();

      if (commentCount > 0) {
        await this.commentModel.deleteMany({ postId: postId }).exec();
      }

      const postDeleteResult = await this.postModel
        .deleteOne({ postId: postId })
        .exec();

      if (postDeleteResult.deletedCount > 0) {
        return Promise.resolve(ResponseDto.ok('게시글 삭제 성공'));
      } else {
        return Promise.resolve(
          ResponseDto.ok('삭제할 게시글이 존재하지 않습니다.'),
        );
      }
    } catch (error) {
      console.error(error);
      return Promise.resolve(ResponseDto.error(error.message));
    }
  }
}
