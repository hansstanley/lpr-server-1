import { Test, TestingModule } from '@nestjs/testing';
import { Lpr1Controller } from './lpr1.controller';

describe('Lpr1Controller', () => {
  let controller: Lpr1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lpr1Controller],
    }).compile();

    controller = module.get<Lpr1Controller>(Lpr1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
