import { TestBed } from '@angular/core/testing';

import { LoggingOutService } from './logging-out.service';

describe('LoggingOutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggingOutService = TestBed.get(LoggingOutService);
    expect(service).toBeTruthy();
  });
});
