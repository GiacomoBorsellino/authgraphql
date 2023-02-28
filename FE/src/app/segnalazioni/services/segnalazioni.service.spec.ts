import { TestBed } from '@angular/core/testing';

import { SegnalazioniService } from './segnalazioni.service';

describe('SegnalazioniService', () => {
  let service: SegnalazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegnalazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
