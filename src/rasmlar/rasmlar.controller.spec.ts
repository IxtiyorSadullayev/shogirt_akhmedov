import { Test, TestingModule } from '@nestjs/testing';
import { RasmlarController } from './rasmlar.controller';
import { RasmlarService } from './rasmlar.service';

describe('RasmlarController', () => {
  let controller: RasmlarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RasmlarController],
      providers: [RasmlarService],
    }).compile();

    controller = module.get<RasmlarController>(RasmlarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
