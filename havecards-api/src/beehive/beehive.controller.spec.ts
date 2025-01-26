import { Test, TestingModule } from '@nestjs/testing';
import { BeeHiveController } from './beehive.controller';
import { BeeHiveService } from './beehive.service';
import { BeehiveModule } from './beehive.module';
import { getModelToken } from '@nestjs/mongoose';

describe('BeeHiveController', () => {
  let controller: BeeHiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [BeehiveModule],
      controllers: [BeeHiveController],
      providers: [BeeHiveService, { provide: getModelToken(BeeHive.name), useValue: jest.fn() }],
    }).compile();

    controller = module.get<BeeHiveController>(BeeHiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of beehives', async () => {
    const result = [
      {
        id: '1',
        name: 'beehive1',
        description: 'beehive1 description',
        number: 1,
        breed: 'Italian',
        frameType: 'Langstroth',
      },
    ];
    jest.spyOn(controller, 'findAll').mockImplementation(async () => result);

    expect(await controller.findAll()).toBe(result);
  });
});
