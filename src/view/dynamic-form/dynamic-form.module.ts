import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormCreateComponent} from './create/dynamic-form-create.component';
import {DynamicFormRoutingModule} from '@dynamic-forms/view/dynamic-form/dynamic-form-routing.module';
import {DynamicFormCreateTitleComponent} from './create/title/dynamic-form-create-title.component';
import {DynamicFormCreateDescriptionComponent} from './create/description/dynamic-form-create-description.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DividerModule} from "@dynamic-forms/components/divider/divider.module";

@NgModule({
  declarations: [
    DynamicFormCreateComponent,
    DynamicFormCreateTitleComponent,
    DynamicFormCreateDescriptionComponent
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule,
    DividerModule
  ]
})
export class DynamicFormModule { }
