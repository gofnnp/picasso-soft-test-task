import { TestBed } from '@angular/core/testing';

import { AutocompleteCompanyService } from './autocomplete-company.service';

describe('AutocompleteCompanyService', () => {
  let service: AutocompleteCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocompleteCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
