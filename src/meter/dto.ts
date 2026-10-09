import { IsNotEmpty, IsNumber, Min, Max } from "class-validator";

export class meterDTO {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(1000000)
    meters: number
}