import { TestBed } from '@angular/core/testing';

import { SubmissionItemService } from './submission-item.service';

describe('SubmissionItemService', () => {
  let service: SubmissionItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
