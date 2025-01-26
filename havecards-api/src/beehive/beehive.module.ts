import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeeHiveController } from './beehive.controller';
import { BeeHiveService } from './beehive.service';
import { BeeHive, BeeHiveSchema } from './schemas/beehive.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BeeHive.name, schema: BeeHiveSchema }]),
  ],
  controllers: [BeeHiveController],
  providers: [BeeHiveService],
})
export class BeehiveModule {}
