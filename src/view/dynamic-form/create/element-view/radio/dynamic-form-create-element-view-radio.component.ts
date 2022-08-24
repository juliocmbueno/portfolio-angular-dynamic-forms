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
    const closer = this.element.nextOptionOf(option) || this.element.previousOptionOf(option);
    const inputEditable = this.getInputEditableFromOption(closer);

    this.element.removeOption(option);

    inputEditable?.edit();
  }

  private getInputEditableFromOption(option: DynamicFormElementOption): InputTextEditableOnClickComponent | undefined{
    const index = this.element.indexOf(option);
    return this.inputsEditable.get(index);
  }

  public deleteOptionIfEmpty(event: Event, option: DynamicFormElementOption):void{
    event.stopImmediatePropagation();
    const inputValue = this.getInputEditableFromOption(option)?.getControlValue();

    if(inputValue?.length == 0){
      if(option.value.length == 0){
        this.remove(option);

      } else {
        option.value = '';

      }
    }
  }

  public editPrevious(option: DynamicFormElementOption):void{
    const previous = this.element.previousOptionOf(option);
    this.getInputEditableFromOption(previous)?.edit();
  }

  public editNext(option: DynamicFormElementOption):void{
    const next = this.element.nextOptionOf(option);

    if(next){
      this.getInputEditableFromOption(next)?.edit();

    } else {
      this.addOption();

    }
  }
}
