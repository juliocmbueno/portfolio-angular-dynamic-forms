import {TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig, TranslocoModule} from '@ngneat/transloco';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {TranslocoHttpLoaderService} from "@dynamic-forms/i18n/transloco-http-loader.service";
import {LanguageID, Languages} from "@dynamic-forms/domain/language";

@NgModule({
  exports: [ TranslocoModule ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: Object.keys(Languages).map(id => {
          return {
            id: id,
            label: Languages[<LanguageID>id].label
          }
        }),
        defaultLang: Languages.en.id,
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoaderService }
  ]
})
export class TranslocoRootModule {}
