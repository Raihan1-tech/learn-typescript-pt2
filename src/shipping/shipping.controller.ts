import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';
import { ParamsDTO, QueryDTO, ShippingDTO } from './dto.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post(':city')
  calculate(
    @Param() params: ParamsDTO,
    @Query() query: QueryDTO,
    @Body() dto: ShippingDTO,
  ) {
    return this.shippingService.calculate(params, query, dto);
  }
}