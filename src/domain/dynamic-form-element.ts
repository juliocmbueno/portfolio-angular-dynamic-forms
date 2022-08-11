
export type DynamicFormElementTypeValue = 'TEXT'|'TEXTAREA';

export class DynamicFormElement {
  label: string | undefined;
  required: boolean;
  type: DynamicFormElementType | undefined;

  constructor(label: string, type: DynamicFormElementType){
    this.required = false;
    this.label = label;
    this.type = type;
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
  }
}
