import { TestBed } from '@angular/core/testing';

import { GenericItemService } from './generic-item.service';

describe('GenericItemService', () => {
  let service: GenericItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
