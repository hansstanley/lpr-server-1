import { Test, TestingModule } from '@nestjs/testing';
import { Intercom1Controller } from './intercom1.controller';

describe('Intercom1Controller', () => {
  let controller: Intercom1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Intercom1Controller],
    }).compile();

    controller = module.get<Intercom1Controller>(Intercom1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
