import {Component, Input} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  selector: 'app-dynamic-form-create-element-view-text',
  templateUrl: './dynamic-form-create-element-view-text.component.html',
})
export class DynamicFormCreateElementViewTextComponent {

  @Input() element!: DynamicFormElement;

  constructor() { }

}
