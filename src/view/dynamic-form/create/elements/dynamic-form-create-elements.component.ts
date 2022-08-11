import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormElement, DynamicFormElementType, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  selector: 'app-dynamic-form-create-elements',
  templateUrl: './dynamic-form-create-elements.component.html',
  styleUrls: ['./dynamic-form-create-elements.component.scss']
})
export class DynamicFormCreateElementsComponent implements OnInit {

  @Input() elements: DynamicFormElement[] = [];

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

    const nextElement = this.nextElementOf(this.editableElement);
    if(nextElement){
      this.edit(nextElement);

    } else {
      this.addNewElement();

    }
  }

  private addNewElement():void{
    const element = new DynamicFormElement('', DynamicFormTypes['TEXT']);
    this.elements.push(element);
    this.edit(element);
  }

  private nextElementOf(element: DynamicFormElement): DynamicFormElement{
    const index = this.elements.indexOf(element);
    return this.elements[index+1];
  }

  private previousElementOf(element: DynamicFormElement): DynamicFormElement{
    const index = this.elements.indexOf(element);
    return this.elements[index-1];
  }

  public edit(element: DynamicFormElement): void{
    this.editableElement = element;

    setTimeout(() => {
      const index = this.elements.indexOf(element);
      document.querySelector<HTMLElement>(`#config-element-title-${index}`)?.focus();
    }, 10);
  }

  public remove(element: DynamicFormElement): void{
    const closer = this.nextElementOf(element) || this.previousElementOf(element);
    if(closer){
      this.edit(closer);
    }

    const index = this.elements.indexOf(element);
    this.elements.splice(index, 1);
  }
}
