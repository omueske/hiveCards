import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Queen } from './schemas/queen.schema';
import { CreateQueenDto } from './dto/create-queen.dto';
import { UpdateQueenDto } from './dto/update-queen.dto';


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

  update(id: string, updateQueenDto: UpdateQueenDto) {
    this.logger.verbose(
      `Updating Location with id: ${id} with the following data: ${JSON.stringify(updateQueenDto)}`,
    );
    return this.QueenModel.updateOne({ _id: id }, updateQueenDto).exec();
  }

  remove(id: string) {
    this.logger.verbose(`Deleting Location with id: ${id}`);
    return this.QueenModel.deleteOne({ _id: id }).exec();
  }
}
