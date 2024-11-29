import { TestBed } from '@angular/core/testing';

import { ChaussureServiceService } from './chaussure-service.service';

describe('ChaussureServiceService', () => {
  let service: ChaussureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaussureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
