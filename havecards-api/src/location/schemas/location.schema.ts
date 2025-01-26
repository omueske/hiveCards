import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import * as mongoose from 'mongoose';

export type LocationDocument = HydratedDocument<Location>;

@Schema()
export class Location {
  @Prop()
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  latitute: string;

  @Prop()
  longitude: string;

  @Prop()
  comments: string[];

  @Prop()
  hives: string[];

  @Prop()
  tags: string[];
}

export const LocationSchema = SchemaFactory.createForClass(Location);
