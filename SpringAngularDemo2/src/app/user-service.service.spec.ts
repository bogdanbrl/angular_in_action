import { TestBed } from '@angular/core/testing';

import { UserServiveService } from './user-servive.service';

describe('UserServiveService', () => {
  let service: UserServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
