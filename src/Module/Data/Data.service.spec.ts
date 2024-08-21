import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';
import { Repository } from 'typeorm';
import { MachinesData } from '../../Entities/MachinesData.entity';
import { DataController } from './Data.contoller';

describe('DataService', () => {
  let controller: DataController;
  let service: DataService;
  let repo: Repository<MachinesData>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataController],
      providers: [
        {
          provide: DataService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DataController>(DataController);
    service = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
