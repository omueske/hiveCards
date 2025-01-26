import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Queen } from './schemas/queen.schema';
import { CreateQueenDto } from './dto/queen.dto';

@Injectable()
export class QueenService {
  constructor(@InjectModel(Queen.name) private QueenModel: Model<Queen>) {}

  private readonly logger = new Logger(QueenService.name);

  create(createQueenDto: CreateQueenDto) {
    this.logger.verbose(
      `Creating a new queen with the following data: ${JSON.stringify(createQueenDto)}`,
    );
    const createdQueens = new this.QueenModel(createQueenDto);
    this.logger.verbose(
      `Created Queen with the following data: ${JSON.stringify(createdQueens)}`,
    );
    return createdQueens.save();
  }

  findAll(): Promise<Queen[]> {
    this.logger.verbose('Finding all queens');
    return this.QueenModel.find().exec();
  }

  findOne(id: string): Promise<Queen | null> {
    this.logger.verbose(`Finding queen with id: ${id}`);
    return this.QueenModel.findById(id).exec();
  }
}
