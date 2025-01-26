import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QueenController } from './queen.controller';
import { QueenService } from './queen.service';
import { Queen, QueenSchema } from './schemas/queen.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Queen.name, schema: QueenSchema }]),
  ],
  controllers: [QueenController],
  providers: [QueenService],
})
export class QueenModule {}
