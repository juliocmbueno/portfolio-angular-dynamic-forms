import {Component, Input} from '@angular/core';
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";

@Component({
  selector: 'app-dynamic-form-create-title',
  templateUrl: './dynamic-form-create-title.component.html'
})
export class DynamicFormCreateTitleComponent {

  @Input() form!: DynamicForm;

  formTitleStyle = {
    'line-height': '1.2',
    'font-weight': '500',
    'font-size': '2rem',
    'text-align': 'center'
  };

}
