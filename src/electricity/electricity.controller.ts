import { Body, Controller, Post } from '@nestjs/common';
import { ElectricityService } from './electricity.service.js';
import { ElecDTO } from './dto.js';

@Controller('bills')
export class ElectricityController {
  constructor(private readonly electricityService: ElectricityService) {}

  @Post('electricity')
  calculate(@Body() dto: ElecDTO) {
    return this.electricityService.calculate(dto);
  }
}