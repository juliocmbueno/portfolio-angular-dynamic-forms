
export class DynamicFormElement {
  label: string | undefined;
  type: DynamicFormElementType | undefined;

  constructor(label: string, type: DynamicFormElementType){
    this.label = label;
    this.type = type;
  }
}

export type DynamicFormElementType = 'TEXT';
