import { TestBed } from '@angular/core/testing';

import { TgApiService } from './tg-api.service';

describe('TgApiService', () => {
  let service: TgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
