import { Logger, Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateQueenDto } from './dto/queen.dto';
import { QueenService } from './queen.service';
import { Queen } from './interfaces/queen.interface';

@Controller('queen')
export class QueenController {
  constructor(private readonly QueenService: QueenService) {}
  private readonly logger = new Logger(QueenController.name);

  @Post()
  async create(@Body() createQueenDto: CreateQueenDto): Promise<Queen> {
    this.logger.verbose(
      `Creating a new Queen with the following data: ${JSON.stringify(createQueenDto)}`,
    );
    return this.QueenService.create(createQueenDto);
  }

  @Get()
  async findAll(): Promise<Queen[]> {
    this.logger.verbose('Finding all Queens');
    return this.QueenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    this.logger.verbose(`Finding queen with id: ${id}`);
    return this.QueenService.findOne(id);
  }
}
