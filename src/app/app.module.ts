import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '@dynamic-forms/app/app.component';
import {AppRoutingModule} from '@dynamic-forms/app/app-routing.module';
import {AppNavComponent} from './app-nav/app-nav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslocoRootModule} from "@dynamic-forms/i18n/transloco-root.module";
import {HttpClientModule} from "@angular/common/http";
import {LanguageSelectorModule} from "@dynamic-forms/components/language-selector/language-selector.module";
import {ThemeLightDarkSelectorModule} from "@dynamic-forms/components/theme-light-dark-selector/theme-light-dark-selector.module";

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,
        LanguageSelectorModule,
        ThemeLightDarkSelectorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
