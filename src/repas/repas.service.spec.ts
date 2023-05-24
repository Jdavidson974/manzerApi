import { Test, TestingModule } from '@nestjs/testing';
import { RepasService } from './repas.service';

describe('RepasService', () => {
  let service: RepasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepasService],
    }).compile();

    service = module.get<RepasService>(RepasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
