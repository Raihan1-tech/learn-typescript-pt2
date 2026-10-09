import { Controller, Get, Query } from '@nestjs/common';
import { TaxService } from './tax.service.js';
import { dto } from './dto.js';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get()
  async CalculateTax(@Query() dto: dto) {
    return this.taxService.CalculateTax(dto)
  }
}