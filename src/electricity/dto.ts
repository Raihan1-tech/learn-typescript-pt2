import { Transform, Type } from 'class-transformer';
import { IsNumber, IsString, IsNotEmpty, Length, Max, ValidateNested, IsPositive } from 'class-validator';

export class MeterDTO {
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  previousKwh: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  currentKwh: number;
}

export class RatesDTO {
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  baseFee: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  perKwh: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @Max(20)
  taxRate: number = 11;
}

export class ElectricityDTO {
  @IsString()
  @IsNotEmpty()
  @Length(3, 80)
  @Transform(({ value }) => value.trim())
  customerName: string;

  @ValidateNested()
  @Type(() => MeterDTO)
  meter: MeterDTO;

  @ValidateNested()
  @Type(() => RatesDTO)
  rates: RatesDTO;
}