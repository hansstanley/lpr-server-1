import { Test, TestingModule } from '@nestjs/testing';
import { Lpr2Controller } from './lpr2.controller';

describe('Lpr2Controller', () => {
  let controller: Lpr2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lpr2Controller],
    }).compile();

    controller = module.get<Lpr2Controller>(Lpr2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
