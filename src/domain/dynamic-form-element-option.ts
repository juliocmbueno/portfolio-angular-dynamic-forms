import {Uuid} from "@dynamic-forms/domain/uuid";

export class DynamicFormElementOption {
  value: string;
  elementId: Uuid;

  constructor(value: string) {
    this.value = value;
    this.elementId = new Uuid();
  }
}
