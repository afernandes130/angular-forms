import { TestBed } from '@angular/core/testing';

import { ExemplosDatasourceService } from './exemplos-datasource.service';

describe('ExemplosDatasourceService', () => {
  let service: ExemplosDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemplosDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
