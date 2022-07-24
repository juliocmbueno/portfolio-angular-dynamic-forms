import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormCreateComponent} from './create/dynamic-form-create.component';
import {DynamicFormRoutingModule} from '@dynamic-forms/view/dynamic-form/dynamic-form-routing.module';
import {DinamicFormCreateTitleComponent} from './create/title/dinamic-form-create-title.component';
import {DinamicFormCreateDescriptionComponent} from './create/description/dinamic-form-create-description.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DynamicFormCreateComponent,
    DinamicFormCreateTitleComponent,
    DinamicFormCreateDescriptionComponent
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule { }
