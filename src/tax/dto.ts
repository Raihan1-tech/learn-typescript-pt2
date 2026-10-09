import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, Max, IsOptional, IsString, IsPositive } from "class-validator";


export class dto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Max(100)
    rate: number

    @IsOptional()
    @IsString()
    @Transform(({ value }) => value === 'true' ? "true" : "false")
    inclusive?: string
}