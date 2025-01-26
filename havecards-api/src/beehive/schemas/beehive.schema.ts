import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import * as mongoose from 'mongoose';

export type BeeHiveDocument = HydratedDocument<BeeHive>;

@Schema()
export class BeeHive {
  @Prop()
  uuid: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Queen' })
  // queen: Queen;

  @Prop()
  number: number;

  @Prop()
  name: string;

  @Prop()
  breed: string;

  @Prop()
  frameType: string;
}

export const BeeHiveSchema = SchemaFactory.createForClass(BeeHive);
