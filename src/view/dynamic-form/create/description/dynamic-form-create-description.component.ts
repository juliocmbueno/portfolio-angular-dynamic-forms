import {Component, Input} from '@angular/core';
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";

@Component({
  selector: 'app-dynamic-form-create-description',
  templateUrl: './dynamic-form-create-description.component.html'
})
export class DynamicFormCreateDescriptionComponent {

  @Input() form!: DynamicForm;

  formDescriptionStyle:any = {
    'font-size': '1.25rem',
    'font-weight': '300',
    'min-height': '30px',
    'height': '30px',
    'text-align': 'center',
    'resize': 'none',
  };

}
