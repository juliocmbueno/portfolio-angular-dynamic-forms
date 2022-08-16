import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormElement, DynamicFormElementType, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";

@Component({
  selector: 'app-dynamic-form-create-elements',
  templateUrl: './dynamic-form-create-elements.component.html',
  styleUrls: ['./dynamic-form-create-elements.component.scss']
})
export class DynamicFormCreateElementsComponent implements OnInit {

  @Input() form!: DynamicForm;

  editableElement!: DynamicFormElement;
  types: DynamicFormElementType[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initTypes();
  }

  private initTypes(): void{
    this.types = Object.keys(DynamicFormTypes).map(key => DynamicFormTypes[key]);
  }

  public goNextOnRemoveButtonTab(event: Event):void{
    event.preventDefault();

    const nextElement = this.form.nextElementOf(this.editableElement);
    if(nextElement){
      this.edit(nextElement);

    } else {
      this.addNewElement();

    }
  }

  private addNewElement():void{
    const element = new DynamicFormElement('', DynamicFormTypes['TEXT']);
    this.form.addElement(element);
    this.edit(element);
  }

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
    if(closer){
      this.edit(closer);
    }

    this.form.removeElement(element);
  }
}
