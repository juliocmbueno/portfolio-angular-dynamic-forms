import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormElement, DynamicFormElementType, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  selector: 'app-dynamic-form-create-elements',
  templateUrl: './dynamic-form-create-elements.component.html',
  styleUrls: ['./dynamic-form-create-elements.component.scss']
})
export class DynamicFormCreateElementsComponent implements OnInit {

  @Input() elements: DynamicFormElement[] = [];

  editableElement?: DynamicFormElement;
  types: DynamicFormElementType[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initTypes();
  }

  private initTypes(): void{
    this.types = Object.keys(DynamicFormTypes).map(key => DynamicFormTypes[key]);
  }

  public edit(element: DynamicFormElement): void{
    this.editableElement = element;
  }

  public remove(element: DynamicFormElement): void{
    if(this.editableElement === element){
      const index = this.elements.indexOf(element);
      this.elements.splice(index, 1);
    }
  }
}
