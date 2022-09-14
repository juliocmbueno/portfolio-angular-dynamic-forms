import {TestBed} from '@angular/core/testing';

import {TranslocoHttpLoaderService} from './transloco-http-loader.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Translation} from "@ngneat/transloco";
import {firstValueFrom} from "rxjs";

describe('TranslocoHttpLoaderService', () => {
  let service: TranslocoHttpLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(TranslocoHttpLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the translate', async () => {
    const translation: Translation|undefined = await firstValueFrom(service.getTranslation('en'));
    expect(translation).toBeTruthy();
    expect(translation['title']).toEqual('Dynamic Forms');
  });
});
