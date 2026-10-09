import { Module } from '@nestjs/common';
import { MeterService } from './meter.service.js';
import { MeterController } from './meter.controller.js';

@Module({
  controllers: [MeterController],
  providers: [MeterService],
})
export class MeterModule {}
