import {
  Logger,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}
  private readonly logger = new Logger(LocationController.name);

  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // Check if the Location has remaining hives
    const location = await this.locationService.findOne(id);
    if (location && location.hives.length > 0) {
      const errorMessage = 'Cannot delete Location with remaining hives';
      Logger.error(errorMessage);
      throw new HttpException(errorMessage, 400);
    }
    return this.locationService.remove(id);
  }
}
