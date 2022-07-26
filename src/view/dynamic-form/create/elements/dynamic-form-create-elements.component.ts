import {Component, Input} from '@angular/core';
import {DynamicFormElement, DynamicFormElementTypeValue} from "@dynamic-forms/domain/dynamic-form-element";
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";
import {moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-dynamic-form-create-elements',
  templateUrl: './dynamic-form-create-elements.component.html',
  styleUrls: ['./dynamic-form-create-elements.component.scss']
})
export class DynamicFormCreateElementsComponent {

  @Input() form!: DynamicForm;

  editableElement!: DynamicFormElement;

  readonly typeText: DynamicFormElementTypeValue = 'TEXT';
  readonly typeTextarea: DynamicFormElementTypeValue = 'TEXTAREA';
  readonly typeRadio: DynamicFormElementTypeValue = 'RADIO';
  readonly typeCheckbox: DynamicFormElementTypeValue = 'CHECKBOX';
  readonly typeSession: DynamicFormElementTypeValue = 'SESSION';

  dragOnGoing: boolean = false;

  constructor() {}

  public edit(element: DynamicFormElement): void{
    if(this.editableElement != element){
      this.editableElement = element;

      setTimeout(() => {
        document.querySelector<HTMLElement>(`#config-element-title-${element.elementId.value}`)?.focus();
      }, 10);
    }
  }

  public remove(element: DynamicFormElement): void{
    const closer = this.form.nextElementOf(element) || this.form.previousElementOf(element);
    this.edit(closer);
    this.form.removeElement(element);
  }

  public drop(previousIndex:number, currentIndex:number) {
    moveItemInArray(this.form.elements, previousIndex, currentIndex);
  }

  public setDragOnGoing(valor:boolean):void{
    this.dragOnGoing = valor;
  }
}
