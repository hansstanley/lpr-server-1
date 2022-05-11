import { Test, TestingModule } from '@nestjs/testing';
import { Lpr1Service } from './lpr1.service';

describe('Lpr1Service', () => {
  let service: Lpr1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lpr1Service],
    }).compile();

    service = module.get<Lpr1Service>(Lpr1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
