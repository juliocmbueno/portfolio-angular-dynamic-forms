import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicFormElement, DynamicFormElementType, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";
import {MultiSelectItem} from "primeng/multiselect";
import {SelectItemGroup} from "primeng/api";

@Component({
  selector: 'app-dynamic-form-create-element-config',
  templateUrl: './dynamic-form-create-element-config.component.html',
  styleUrls: ['./dynamic-form-create-element-config.component.scss']
})
export class DynamicFormCreateElementConfigComponent implements OnInit {

  @Input() form!: DynamicForm;
  @Input() element!: DynamicFormElement;
  @Input() visible:boolean = false;

  @Output() onRemove: EventEmitter<DynamicFormElement> = new EventEmitter<DynamicFormElement>();
  @Output() editNext: EventEmitter<DynamicFormElement> = new EventEmitter<DynamicFormElement>();

  types: SelectItemGroup[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initTypes();
  }

  private initTypes(): void{
    this.types = [
      {
        label: 'Text',
        items: [
          {label: DynamicFormTypes.TEXT.label, value: DynamicFormTypes.TEXT},
          {label: DynamicFormTypes.TEXTAREA.label, value: DynamicFormTypes.TEXTAREA}
        ]
      },
      {
        label: 'Choice',
        items: [
          {label: DynamicFormTypes.CHECKBOX.label, value: DynamicFormTypes.CHECKBOX},
          {label: DynamicFormTypes.RADIO.label, value: DynamicFormTypes.RADIO}
        ]
      },
      {
        label: 'Other',
        items: [
          {label: DynamicFormTypes.SESSION.label, value: DynamicFormTypes.SESSION}
        ]
      },
    ];
  }

  public onDeleteButtonTab(event: Event):void{
    event.preventDefault();

    const nextElement = this.form.nextElementOf(this.element);
    if(nextElement){
      this.editNext.emit(nextElement);

    } else {
      this.addNewElement();

    }
  }

  private addNewElement():void{
    MultiSelectItem
    const element = new DynamicFormElement('', DynamicFormTypes.TEXT);
    this.form.addElement(element);
    this.editNext.emit(element);
  }

  public remove():void{
    const closer = this.form.nextElementOf(this.element) || this.form.previousElementOf(this.element);
    this.form.removeElement(this.element);
    this.onRemove.emit(closer);
  }

  public onTypeChange(type: DynamicFormElementType):void{
    type.sanitizeElement(this.element);
  }
}
