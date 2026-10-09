import { Controller, Get, Param, Query } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { ParamsDTO, QueryDTO } from './dto.js';

@Controller('convert/temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get(':value')
  convert(@Param() params: ParamsDTO, @Query() query: QueryDTO) {
    return this.temperatureService.convert(params, query);
  }
}