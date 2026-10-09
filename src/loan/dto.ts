import { Transform, Type } from 'class-transformer';
import { IsIn, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class ParamDTO {
  @Type(() => Number)
  @IsNumber()
  @Min(1000000)
  @Max(1000000000)
  principal: number;
}

export class QueryDTO {
  @IsOptional()
  @Transform(({ value }) => value ?? 'IDR')
  @IsIn(['IDR', 'USD'])
  currency: string = 'IDR';
}

export class LoanDTO {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(60)
  months: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(50)
  annualInterestRate: number;
}