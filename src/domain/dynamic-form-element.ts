import {DynamicFormElementOption} from "@dynamic-forms/domain/dynamic-form-element-option";

export type DynamicFormElementTypeValue = 'TEXT'|'TEXTAREA'|'RADIO'|'CHECKBOX';

export class DynamicFormElement {
  label: string | undefined;
  required: boolean;
  type: DynamicFormElementType;
  options: DynamicFormElementOption[];

  constructor(label: string, type: DynamicFormElementType){
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
  icon: string
}

export const DynamicFormTypes: {[key:string]:DynamicFormElementType} = {
  'TEXT': {
    label: 'Short Text',
    elementType: 'TEXT',
    icon: 'fa-solid fa-grip-lines'
  },
  'TEXTAREA': {
    label: 'Long Text',
    elementType: 'TEXTAREA',
    icon: 'fa-solid fa-align-left'
  },
  'RADIO': {
    label: 'Single Choice',
    elementType: 'RADIO',
    icon: 'fa-solid fa-circle-dot'
  },
  'CHECKBOX': {
    label: 'Multiple Choice',
    elementType: 'CHECKBOX',
    icon: 'fa-solid fa-square-check'
  }
}
