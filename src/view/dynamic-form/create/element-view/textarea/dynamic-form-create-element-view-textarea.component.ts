import {Component, Input} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  selector: 'app-dynamic-form-create-element-view-textarea',
  templateUrl: './dynamic-form-create-element-view-textarea.component.html'
})
export class DynamicFormCreateElementViewTextareaComponent {

  @Input() element!: DynamicFormElement;

  constructor() { }

}
