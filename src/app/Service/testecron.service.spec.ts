import { TestBed } from '@angular/core/testing';

import { TestecronService } from './testecron.service';

describe('TestecronService', () => {
  let service: TestecronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestecronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
