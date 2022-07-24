import {DynamicFormElement} from '@dynamic-forms/domain/dynamic-form-element';

export class DynamicForm {

  title: string | undefined;
  description: string | undefined;
  elements: DynamicFormElement[] = [];

  constructor(title: string){
    this.title = title;
  }

  public addElement(element: DynamicFormElement){
    this.elements.push(element);
  }

}
