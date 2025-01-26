import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeehiveModule } from './beehive/beehive.module';
import { QueenModule } from './queen/queen.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/hivecards'),
    BeehiveModule,
    QueenModule,
    LocationModule,
  ],
})
export class AppModule {}
