import { Controller, Get, Param, Query } from '@nestjs/common';
import { ParkingService } from './parking.service.js';
import { ParamsDTO, QueryDTO } from './dto.js';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Get(':hours')
  calculate(@Param() params: ParamsDTO, @Query() query: QueryDTO) {
    return this.parkingService.calculate(params, query);
  }
}