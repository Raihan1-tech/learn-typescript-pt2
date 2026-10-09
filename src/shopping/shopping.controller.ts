import { Body, Controller, Post, Query } from '@nestjs/common';
import { CheckoutDTO, QueryDTO } from './dto.js';
import { ShoppingService } from './shopping.service.js';

@Controller('shopping')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingService) {}

  @Post('discount')
  calculate(@Query() query: QueryDTO, @Body() dto: CheckoutDTO) {
    return this.shoppingService.calculate(query, dto);
  }
}