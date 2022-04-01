/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RollService } from './roll.service';

describe('Service: Roll', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollService]
    });
  });

  it('should ...', inject([RollService], (service: RollService) => {
    expect(service).toBeTruthy();
  }));
});
