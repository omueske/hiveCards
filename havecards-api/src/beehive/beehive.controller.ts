import { Logger, Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateBeeHiveDto } from './dto/create-beehive.dto';
import { BeeHiveService } from './beehive.service';
import { BeeHive } from './interfaces/beehive.interface';

@Controller('beehive')
export class BeeHiveController {
  constructor(private readonly beeHiveService: BeeHiveService) {}
  private readonly logger = new Logger(BeeHiveController.name);

  @Post()
  async create(@Body() createBeehiveDto: CreateBeeHiveDto): Promise<BeeHive> {
    this.logger.verbose(
      `Creating a new beehive with the following data: ${JSON.stringify(createBeehiveDto)}`,
    );
    return this.beeHiveService.create(createBeehiveDto);
  }

  @Get()
  async findAll(): Promise<BeeHive[]> {
    this.logger.verbose('Finding all beehives');
    return this.beeHiveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.verbose(`Finding beehive with id: ${id}`);
    return this.beeHiveService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.verbose(`Deleting beeHive with id: ${id}`);
    return this.beeHiveService.remove(id);
  }
}
