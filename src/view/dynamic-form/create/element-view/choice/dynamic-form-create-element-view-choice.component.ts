import {Component, Input, QueryList, ViewChildren} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";
import {InputTextEditableOnClickComponent} from "@dynamic-forms/components/input-text-editable-on-click/input-text-editable-on-click.component";
import {DynamicFormElementOption} from "@dynamic-forms/domain/dynamic-form-element-option";

@Component({
  selector: 'app-dynamic-form-create-element-view-choice',
  templateUrl: './dynamic-form-create-element-view-choice.component.html',
  styleUrls: ['./dynamic-form-create-element-view-choice.component.scss']
})
export class DynamicFormCreateElementViewChoiceComponent {

  @Input() element!: DynamicFormElement;
  @Input() type!: 'radio' | 'checkbox';
  @Input() editable:boolean = false;

  @ViewChildren('inputTextEditableOnClick') inputsEditable!: QueryList<InputTextEditableOnClickComponent>;

  exceptions: {[key:string]: string} = {};
  nameAux:number = 1;

  public addOption(): void{
    const newOption = new DynamicFormElementOption(this.getNewOptionName());
    this.element.addOption(newOption);
    setTimeout(() => this.inputsEditable.last.edit(), 10);
  }

  private getNewOptionName():string{
    return `New Option ${this.nameAux++}`;
  }

  public updateOption(option: DynamicFormElementOption, newOptionValue: string): void{
    if(newOptionValue.length == 0){
      option.value = this.getNewOptionName();
      this.getInputEditableFromOption(option)?.setControlValue(option.value);
      return;
    }

    if(this.exceptions[option.elementId.value]){
      delete this.exceptions[option.elementId.value];
      this.getInputEditableFromOption(option)?.setControlValue(option.value);
      return;
    }

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
    event.stopPropagation();
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

  public onRemoveBtnTagKeyDown(event:Event, option: DynamicFormElementOption):void{
    event.preventDefault();
    this.editNext(option);
  }

  public onInputValue(value:string, option: DynamicFormElementOption):void{
    delete this.exceptions[option.elementId.value];

    const duplicatedValue = this.element.options
      .filter(optionTemp => optionTemp != option)
      .map(optionTemp => optionTemp.value)
      .some(valueTemp => valueTemp?.toLocaleLowerCase() === value?.toLowerCase());

    if(duplicatedValue){
      this.exceptions[option.elementId.value] = 'Duplicated Value';
    }
  }
}
