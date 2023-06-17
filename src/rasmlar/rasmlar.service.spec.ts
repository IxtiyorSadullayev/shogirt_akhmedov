import { Test, TestingModule } from '@nestjs/testing';
import { RasmlarService } from './rasmlar.service';

describe('RasmlarService', () => {
  let service: RasmlarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RasmlarService],
    }).compile();

    service = module.get<RasmlarService>(RasmlarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
