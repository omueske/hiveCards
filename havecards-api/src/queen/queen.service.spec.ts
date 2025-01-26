import { Test, TestingModule } from '@nestjs/testing';
import { QueenService } from './queen.service';
import { QueenModule } from './queen.module';
import { getModelToken } from '@nestjs/mongoose';
import { Queen } from './schemas/queen.schema';

describe('QueenService', () => {
  let service: QueenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [QueenModule],
      providers: [
        QueenService,
        { provide: getModelToken(Queen.name), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<QueenService>(QueenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
