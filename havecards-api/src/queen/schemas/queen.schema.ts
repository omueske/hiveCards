import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import * as mongoose from 'mongoose';

export type QueenDocument = HydratedDocument<Queen>;

@Schema()
export class Queen {
  @Prop()
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Queen' })
  // queen: Queen;

  @Prop()
  number: number;

  @Prop()
  breed: string;

  @Prop()
  hatchDate: Date;

  @Prop()
  color: string;

  @Prop()
  pedigree: string;

  @Prop()
  comment: string;
}

export const QueenSchema = SchemaFactory.createForClass(Queen);
