import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormCreateComponent} from './create/dynamic-form-create.component';
import {DynamicFormRoutingModule} from '@dynamic-forms/view/dynamic-form/dynamic-form-routing.module';
import {DynamicFormCreateTitleComponent} from './create/title/dynamic-form-create-title.component';
import {DynamicFormCreateDescriptionComponent} from './create/description/dynamic-form-create-description.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DividerModule} from "@dynamic-forms/components/divider/divider.module";
import {DynamicFormCreateElementsComponent} from './create/elements/dynamic-form-create-elements.component';
import {DropdownModule} from "primeng/dropdown";
import {InplaceModule} from "primeng/inplace";
import {TooltipModule} from "primeng/tooltip";
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    DynamicFormCreateComponent,
    DynamicFormCreateTitleComponent,
    DynamicFormCreateDescriptionComponent,
    DynamicFormCreateElementsComponent
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    InplaceModule,
    TooltipModule,
    InputSwitchModule
  ]
})
export class DynamicFormModule { }
