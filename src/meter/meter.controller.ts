import { Controller, Get, Param} from '@nestjs/common';
import { MeterService } from './meter.service.js';
import { meterDTO } from './dto.js';

@Controller('convert')
export class MeterController {
  constructor(private readonly meterService:MeterService) { }

  @Get('length/:meters')
  ConvertMeter(@Param() dto:meterDTO) {
    return this.meterService.convertMeters(dto)
  }
}