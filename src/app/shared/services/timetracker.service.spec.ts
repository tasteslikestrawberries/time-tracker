import { TestBed } from '@angular/core/testing';

import { TimetrackerService } from './timetracker.service';

describe('TimetrackerService', () => {
  let service: TimetrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
