import {Injectable} from '@angular/core';
import {Translation, TranslocoLoader} from "@ngneat/transloco";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TranslocoHttpLoaderService implements TranslocoLoader{

  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }

}
