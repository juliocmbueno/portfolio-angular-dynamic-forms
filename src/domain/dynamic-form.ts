import {DynamicFormElement} from '@dynamic-forms/domain/dynamic-form-element';

export class DynamicForm {

  title: string | undefined;
  description: string | undefined;
  elements: DynamicFormElement[] = [];

  constructor(title?: string){
    this.title = title;
  }

  public addElement(element: DynamicFormElement): void{
    this.elements.push(element);
  }

  public removeElement(element: DynamicFormElement): void{
    const index = this.indexOf(element);
    if(index >= 0){
      this.elements.splice(index, 1);
    }
  }

  public nextElementOf(element: DynamicFormElement): DynamicFormElement{
    return this.elements[this.indexOf(element)+1];
  }

  public previousElementOf(element: DynamicFormElement): DynamicFormElement{
    return this.elements[this.indexOf(element)-1];
  }

  public indexOf(element: DynamicFormElement): number{
    return this.elements.indexOf(element);
  }
}
