
export type DynamicFormElementTypeValue = 'TEXT'|'TEXTAREA'|'RADIO'|'CHECKBOX';

export class DynamicFormElement {
  label: string | undefined;
  required: boolean;
  type: DynamicFormElementType;
  options: string[];

  constructor(label: string, type: DynamicFormElementType){
    this.required = false;
    this.label = label;
    this.type = type;
    this.options = [];
  }

  public addOption(option: string):void{
    this.options.push(option);
  }

  public removeOption(option: string):void{
    const index = this.indexOf(option);
    if(index >= 0){
      this.options.splice(index, 1);
    }
  }

  public nextOptionOf(option: string): string{
    return this.options[this.indexOf(option)+1];
  }

  public previousOptionOf(option: string): string{
    return this.options[this.indexOf(option)-1];
  }

  public indexOf(option: string): number{
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
