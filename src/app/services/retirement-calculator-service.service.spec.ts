import { TestBed } from '@angular/core/testing';

import { RetirementCalculatorServiceService } from './retirement-calculator-service.service';

describe('RetirementCalculatorServiceService', () => {
  let service: RetirementCalculatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetirementCalculatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
