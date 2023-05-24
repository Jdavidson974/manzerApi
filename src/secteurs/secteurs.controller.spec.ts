import { Test, TestingModule } from '@nestjs/testing';
import { SecteursController } from './secteurs.controller';
import { SecteursService } from './secteurs.service';

describe('SecteursController', () => {
  let controller: SecteursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecteursController],
      providers: [SecteursService],
    }).compile();

    controller = module.get<SecteursController>(SecteursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
