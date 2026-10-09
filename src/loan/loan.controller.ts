import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { LoanService } from './loan.service.js';
import { LoanDTO, ParamDTO, QueryDTO } from './dto.js';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post(':principal/installment')
  calculate(
    @Param() params: ParamDTO,
    @Query() query: QueryDTO,
    @Body() dto: LoanDTO,
  ) {
    return this.loanService.calculate(params, query, dto);
  }
}