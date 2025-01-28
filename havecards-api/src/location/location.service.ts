import { Logger, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Location } from './schemas/location.schema';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private LocationModel: Model<Location>,
  ) {}

  private readonly logger = new Logger(LocationService.name);
  create(createLocationDto: CreateLocationDto) {
    this.logger.verbose(
      `Creating a new Location with the following data: ${JSON.stringify(createLocationDto)}`,
    );
    const createdLocations = new this.LocationModel(createLocationDto);
    this.logger.verbose(
      `Created Location with the following data: ${JSON.stringify(createdLocations)}`,
    );
    return createdLocations.save();
  }

  findAll() {
    this.logger.verbose('Finding all Locations');
    return this.LocationModel.find().exec();
  }

  findOne(id: string): Promise<Location | null> {
    this.logger.verbose(`Finding Location with id: ${id}`);
    return this.LocationModel.findById(id).exec();
  }

  update(id: string, updateLocationDto: UpdateLocationDto) {
    this.logger.verbose(
      `Updating Location with id: ${id} with the following data: ${JSON.stringify(updateLocationDto)}`,
    );
    return this.LocationModel.updateOne({ _id: id }, updateLocationDto).exec();
  }

  remove(id: string) {
    this.logger.verbose(`Deleting Location with id: ${id}`);
    return this.LocationModel.deleteOne({ _id: id }).exec();
  }
}
