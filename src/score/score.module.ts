import { Module } from '@nestjs/common';
import { ScoreController } from './score.controller.js';
import { ScoresService } from './score.service.js';

@Module({
  controllers: [ScoreController],
  providers: [ScoresService],
})
export class ScoreModule {}
