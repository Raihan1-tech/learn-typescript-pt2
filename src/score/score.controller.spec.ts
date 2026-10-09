import { Test, TestingModule } from '@nestjs/testing';
import { ScoreController } from './score.controller.js';
import { ScoresService } from './score.service.js';

describe('ScoreController', () => {
  let controller: ScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoreController],
      providers: [ScoresService],
    }).compile();

    controller = module.get<ScoreController>(ScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
