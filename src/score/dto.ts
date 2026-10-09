import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, Max, Min } from "class-validator";

export class ScoreDTO {
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, { each: true })
    @Min(0, { each: true })
    @Max(100, { each: true })
    scores: number[]

    @IsNumber()
    @IsPositive()
    passMark: number = 70
}