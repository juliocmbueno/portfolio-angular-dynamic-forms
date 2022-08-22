import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextareaEditableOnClickComponent} from './input-textarea-editable-on-click.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AutosizeModule} from "ngx-autosize";

@NgModule({
  declarations: [
    InputTextareaEditableOnClickComponent
  ],
  exports: [
    InputTextareaEditableOnClickComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutosizeModule
  ]
})
export class InputTextareaEditableOnClickModule { }
