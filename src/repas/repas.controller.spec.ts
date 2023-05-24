import { Test, TestingModule } from '@nestjs/testing';
import { RepasController } from './repas.controller';
import { RepasService } from './repas.service';

describe('RepasController', () => {
  let controller: RepasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepasController],
      providers: [RepasService],
    }).compile();

    controller = module.get<RepasController>(RepasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
