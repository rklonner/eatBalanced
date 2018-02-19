import { TestBed, inject } from '@angular/core/testing';

import { MenuplanService } from './menuplan.service';

describe('MenuplanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuplanService]
    });
  });

  it('should be created', inject([MenuplanService], (service: MenuplanService) => {
    expect(service).toBeTruthy();
  }));
});
