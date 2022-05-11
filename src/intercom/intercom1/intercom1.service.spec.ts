import { Test, TestingModule } from '@nestjs/testing';
import { Intercom1Service } from './intercom1.service';

describe('Intercom1Service', () => {
  let service: Intercom1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Intercom1Service],
    }).compile();

    service = module.get<Intercom1Service>(Intercom1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
