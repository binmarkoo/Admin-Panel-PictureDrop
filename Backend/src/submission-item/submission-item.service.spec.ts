/* eslint-disable */

import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionItemService } from './submission-item.service';

describe('SubmissionItemService', () => {
  let service: SubmissionItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmissionItemService],
    }).compile();

    service = module.get<SubmissionItemService>(SubmissionItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
