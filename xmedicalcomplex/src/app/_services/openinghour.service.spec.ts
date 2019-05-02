import { TestBed } from '@angular/core/testing';

import { OpeninghourService } from './openinghour.service';

describe('OpeninghourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpeninghourService = TestBed.get(OpeninghourService);
    expect(service).toBeTruthy();
  });
});
