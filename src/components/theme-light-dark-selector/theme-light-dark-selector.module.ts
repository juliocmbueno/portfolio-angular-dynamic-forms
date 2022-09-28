import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeLightDarkSelectorComponent} from './theme-light-dark-selector.component';


@NgModule({
  declarations: [
    ThemeLightDarkSelectorComponent
  ],
  exports: [
    ThemeLightDarkSelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeLightDarkSelectorModule { }
