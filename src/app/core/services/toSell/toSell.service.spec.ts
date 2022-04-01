/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToSellService } from './toSell.service';

describe('Service: ToSell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToSellService]
    });
  });

  it('should ...', inject([ToSellService], (service: ToSellService) => {
    expect(service).toBeTruthy();
  }));
});
