import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BeeHive } from './schemas/beehive.schema';
import { CreateBeeHiveDto } from './dto/create-beehive.dto';
import { UpdateBeeHiveDto } from './dto/update-beehive.dto';

@Injectable()
export class BeeHiveService {
  constructor(
    @InjectModel(BeeHive.name) private BeeHiveModel: Model<BeeHive>,
  ) {}

  private readonly logger = new Logger(BeeHiveService.name);

  create(createBeehiveDto: CreateBeeHiveDto) {
    this.logger.verbose(
      `Creating a new beehive with the following data: ${JSON.stringify(createBeehiveDto)}`,
    );
    const createdBeeHives = new this.BeeHiveModel(createBeehiveDto);
    this.logger.verbose(
      `Created beehive with the following data: ${JSON.stringify(createdBeeHives)}`,
    );
    return createdBeeHives.save();
  }

  findAll(): Promise<BeeHive[]> {
    this.logger.verbose('Finding all beehives');
    return this.BeeHiveModel.find().exec();
  }

  findOne(id: string): Promise<BeeHive | null> {
    this.logger.verbose(`Finding beehive with id: ${id}`);
    return this.BeeHiveModel.findById(id).exec();
  }

  update(id: string, updateBeeHiveDto: UpdateBeeHiveDto) {
    this.logger.verbose(
      `Updating BeeHive with id: ${id} with the following data: ${JSON.stringify(updateBeeHiveDto)}`,
    );
    return this.BeeHiveModel.updateOne({ _id: id }, updateBeeHiveDto).exec();
  }

  remove(id: string) {
    this.logger.verbose(`Deleting beeHive with id: ${id}`);
    return this.BeeHiveModel.deleteOne({ _id: id }).exec();
  }
}
