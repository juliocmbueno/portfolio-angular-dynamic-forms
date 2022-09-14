import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguageSelectorComponent} from './language-selector.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  exports: [
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ]
})
export class LanguageSelectorModule { }
