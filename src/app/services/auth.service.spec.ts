import { TestBed } from '@angular/core/testing';

import { MyAuthService } from './auth.service';

describe('MyAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAuthService = TestBed.get(MyAuthService);
    expect(service).toBeTruthy();
  });
});
