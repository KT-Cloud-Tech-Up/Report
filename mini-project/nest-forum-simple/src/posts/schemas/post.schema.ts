import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostsDocument = Posts & Document;

@Schema({ timestamps: true, collection: 'posts' })
export class Posts extends Document {
  @Prop({ required: true, unique: true })
  postId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  createdAt?: Date;
  modifiedAt?: Date;
}

export const PostSchema = SchemaFactory.createForClass(Posts);
