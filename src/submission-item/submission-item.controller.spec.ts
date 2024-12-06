/* eslint-disable */

import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionItemController } from './submission-item.controller';
import { SubmissionItemService } from './submission-item.service';

describe('SubmissionItemController', () => {
  let controller: SubmissionItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmissionItemController],
      providers: [SubmissionItemService],
    }).compile();

    controller = module.get<SubmissionItemController>(SubmissionItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});