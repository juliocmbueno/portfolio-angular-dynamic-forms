import {Component, Input} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";

@Component({
  selector: 'app-dynamic-form-create-elements',
  templateUrl: './dynamic-form-create-elements.component.html',
  styleUrls: ['./dynamic-form-create-elements.component.scss']
})
export class DynamicFormCreateElementsComponent {

  @Input() form!: DynamicForm;

  editableElement!: DynamicFormElement;

  constructor() {}

  public edit(element: DynamicFormElement): void{
    if(this.editableElement != element){
      this.editableElement = element;

      setTimeout(() => {
        const index = this.form.indexOf(element);
        document.querySelector<HTMLElement>(`#config-element-title-${index}`)?.focus();
      }, 10);
    }
  }

  public remove(element: DynamicFormElement): void{
    const closer = this.form.nextElementOf(element) || this.form.previousElementOf(element);
    this.edit(closer);
    this.form.removeElement(element);
  }
}
