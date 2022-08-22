import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextEditableOnClickComponent} from './input-text-editable-on-click.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    InputTextEditableOnClickComponent
  ],
  exports: [
    InputTextEditableOnClickComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InputTextEditableOnClickModule { }
