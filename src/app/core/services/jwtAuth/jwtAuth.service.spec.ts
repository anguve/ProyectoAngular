/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JwtAuthService } from './jwtAuth.service';

describe('Service: JwtAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtAuthService]
    });
  });

  it('should ...', inject([JwtAuthService], (service: JwtAuthService) => {
    expect(service).toBeTruthy();
  }));
});
