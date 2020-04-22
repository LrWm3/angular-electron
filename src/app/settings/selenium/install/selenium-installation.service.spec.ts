import { TestBed } from '@angular/core/testing';

import { SeleniumInstallationService } from './selenium-installation.service';

describe('SeleniumInstallationService', () => {
  let service: SeleniumInstallationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleniumInstallationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
