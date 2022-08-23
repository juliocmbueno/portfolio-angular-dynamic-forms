import {Component, Input, QueryList, ViewChildren} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";
import {InputTextEditableOnClickComponent} from "@dynamic-forms/components/input-text-editable-on-click/input-text-editable-on-click.component";
import {DynamicFormElementOption} from "@dynamic-forms/domain/dynamic-form-element-option";

@Component({
  selector: 'app-dynamic-form-create-element-view-radio',
  templateUrl: './dynamic-form-create-element-view-radio.component.html',
  styleUrls: ['./dynamic-form-create-element-view-radio.component.scss']
})
export class DynamicFormCreateElementViewRadioComponent {

  @Input() element!: DynamicFormElement;

  @ViewChildren('inputTextEditableOnClick') inputsEditable!: QueryList<InputTextEditableOnClickComponent>;

  nameAux:number = 1;

  public addOption(): void{
    const newOption = new DynamicFormElementOption(`New Option ${this.nameAux++}`);
    this.element.addOption(newOption);
    setTimeout(() => this.inputsEditable.last.edit(), 10);
  }

  public updateOption(option: DynamicFormElementOption, newOptionValue: string): void{
    if(option.value != newOptionValue){
      option.value = newOptionValue;
    }
  }

  public remove(option: DynamicFormElementOption):void{
    this.element.removeOption(option);
  }
}
