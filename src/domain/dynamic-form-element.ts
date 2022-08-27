import {DynamicFormElementOption} from "@dynamic-forms/domain/dynamic-form-element-option";
import {Uuid} from "@dynamic-forms/domain/uuid";

export type DynamicFormElementTypeValue = 'TEXT'|'TEXTAREA'|'RADIO'|'CHECKBOX';

export class DynamicFormElement {
  label: string | undefined;
  required: boolean;
  type: DynamicFormElementType;
  elementId: Uuid;
  options: DynamicFormElementOption[];

  constructor(label: string, type: DynamicFormElementType){
    this.elementId = new Uuid();
    this.required = false;
    this.label = label;
    this.type = type;
    this.options = [];
  }

  public addOption(option: DynamicFormElementOption):void{
    this.options.push(option);
  }

  public removeOption(option: DynamicFormElementOption):void{
    this.removeOptionByIndex(this.indexOf(option));
  }

  public removeOptionByIndex(index: number):void{
    if(index >= 0){
      this.options.splice(index, 1);
    }
  }

  public nextOptionOf(option: DynamicFormElementOption): DynamicFormElementOption{
    return this.options[this.indexOf(option)+1];
  }

  public previousOptionOf(option: DynamicFormElementOption): DynamicFormElementOption{
    return this.options[this.indexOf(option)-1];
  }

  public indexOf(option: DynamicFormElementOption): number{
    return this.options.indexOf(option);
  }
}

export interface DynamicFormElementType {
  label: string,
  elementType: DynamicFormElementTypeValue,
  icon: string,

  sanitizeElement(element: DynamicFormElement): void
}

export const DynamicFormTypes: {[key:string]:DynamicFormElementType} = {
  'TEXT': {
    label: 'Short Text',
    elementType: 'TEXT',
    icon: 'fa-solid fa-grip-lines',
    sanitizeElement(element: DynamicFormElement) {
      element.options = [];
    }
  },
  'TEXTAREA': {
    label: 'Long Text',
    elementType: 'TEXTAREA',
    icon: 'fa-solid fa-align-left',
    sanitizeElement(element: DynamicFormElement) {
      element.options = [];
    }
  },
  'RADIO': {
    label: 'Single Choice',
    elementType: 'RADIO',
    icon: 'fa-solid fa-circle-dot',
    sanitizeElement(element: DynamicFormElement) {}
  },
  'CHECKBOX': {
    label: 'Multiple Choice',
    elementType: 'CHECKBOX',
    icon: 'fa-solid fa-square-check',
    sanitizeElement(element: DynamicFormElement) {}
  }
}
