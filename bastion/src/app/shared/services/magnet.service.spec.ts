import { TestBed, inject } from '@angular/core/testing';

import { MagnetService } from './magnet.service';

describe('MagnetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagnetService]
    });
  });

  it('should be created', inject([MagnetService], (service: MagnetService) => {
    expect(service).toBeTruthy();
  }));
});
