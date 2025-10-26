import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaginatorModule } from 'src/utils/paginator.module';
import { Posts, PostSchema } from './schemas/post.schema';
import { Comments, CommentSchema } from 'src/comments/schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Posts.name, schema: PostSchema },
      { name: Comments.name, schema: CommentSchema },
    ]),
    PaginatorModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
