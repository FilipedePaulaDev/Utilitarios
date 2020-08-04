import { TestBed } from '@angular/core/testing';

import { DadosService } from './dados.service';

describe('DashboardService', () => {
  let service: DadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosService);
  });
});
