import { Body, Controller, Post } from '@nestjs/common';
import { ScoreDTO } from './dto.js';
import { ScoresService } from './score.service.js';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoresService) {}

  @Post('average')
  CheckScores(@Body() dto: ScoreDTO) {
    return this.scoreService.CheckScore(dto)
  }
}
