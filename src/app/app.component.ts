import {Component} from '@angular/core';
import {DynamicForm} from '@dynamic-forms/domain/dynamic-form';
import {DynamicFormElement, DynamicFormTypes} from '@dynamic-forms/domain/dynamic-form-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form:DynamicForm;

  constructor(){
    this.form = new DynamicForm('Test DynamicForm');
    this.form.addElement(new DynamicFormElement('DynamicFormElement One', DynamicFormTypes['TEXT']))
  }

}
