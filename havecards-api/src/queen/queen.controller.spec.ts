import { Test, TestingModule } from '@nestjs/testing';
import { QueenController } from './queen.controller';
import { QueenService } from './queen.service';
import { QueenModule } from './queen.module';
import { getModelToken } from '@nestjs/mongoose';
import { Queen } from './schemas/queen.schema';


describe('QueenController', () => {
  let controller: QueenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [QueenModule],
      controllers: [QueenController],
      providers: [
        QueenService,
        { provide: getModelToken(Queen.name), useValue: jest.fn() },
      ],
    }).compile();

    controller = module.get<QueenController>(QueenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
