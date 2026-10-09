import { Test, TestingModule } from '@nestjs/testing';
import { MeterController } from './meter.controller.js';
import { MeterService } from './meter.service.js';

describe('MeterController', () => {
  let controller: MeterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeterController],
      providers: [MeterService],
    }).compile();

    controller = module.get<MeterController>(MeterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
