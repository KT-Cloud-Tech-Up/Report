import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema({ timestamps: true, collection: 'comments' })
export class Comments extends Document {
  @Prop({ required: true, unique: true })
  commentId: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  nickName: string;

  @Prop({ required: true })
  postId: string;

  createdAt?: Date;
  modifiedAt?: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comments);
