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
import {DynamicFormCreateElementConfigComponent} from './create/element-config/dynamic-form-create-element-config.component';
import {DynamicFormCreateElementViewTextComponent} from './create/element-view/text/dynamic-form-create-element-view-text.component';
import {DynamicFormCreateElementViewTextareaComponent} from './create/element-view/textarea/dynamic-form-create-element-view-textarea.component';
import {DynamicFormCreateElementViewChoiceComponent} from './create/element-view/choice/dynamic-form-create-element-view-choice.component';
import {InputTextEditableOnClickModule} from "@dynamic-forms/components/input-text-editable-on-click/input-text-editable-on-click.module";
import {InputTextareaEditableOnClickModule} from "@dynamic-forms/components/input-textarea-editable-on-click/input-textarea-editable-on-click.module";
import {DynamicFormCreateElementViewSessionComponent} from './create/element-view/session/dynamic-form-create-element-view-session.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    DynamicFormCreateComponent,
    DynamicFormCreateTitleComponent,
    DynamicFormCreateDescriptionComponent,
    DynamicFormCreateElementsComponent,
    DynamicFormCreateElementConfigComponent,
    DynamicFormCreateElementViewTextComponent,
    DynamicFormCreateElementViewTextareaComponent,
    DynamicFormCreateElementViewChoiceComponent,
    DynamicFormCreateElementViewSessionComponent
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
        InputSwitchModule,
        InputTextEditableOnClickModule,
        InputTextareaEditableOnClickModule,
        DragDropModule
    ]
})
export class DynamicFormModule { }
