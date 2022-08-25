import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text-editable-on-click',
  templateUrl: './input-text-editable-on-click.component.html'
})
export class InputTextEditableOnClickComponent implements OnInit {

  @Input() inputStyle: { [klass: string]: any; } | null = null;
  @Input() valueStyle: { [klass: string]: any; } | null = null;
  @Input() styleClassValueNotEditable:string|string[] = [];
  @Input() inputId!: string;
  @Input() emptyText: string = 'Click to edit'
  @Input() value: string | undefined;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onInput: EventEmitter<string> = new EventEmitter<string>();

  editable: boolean = false;
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup():void{
    this.formGroup = this.formBuilder.group({
      value: [this.value]
    });
  }

  public edit():void{
    if(!this.editable){
      this.editable = true;

      setTimeout(() => {
        const input = this.getInput();
        input?.focus();
        setTimeout(() => input?.select(), 1);
      }, 1);
    }
  }

  public save():void{
    const value:string = this.formGroup.get('value')?.value;
    this.valueChange.emit(value);
    this.editable = false;
  }

  public getInput(): HTMLInputElement|null{
    return document.querySelector<HTMLInputElement>(`#${this.inputId}`);
  }

  public getControlValue(): string | undefined{
    return this.formGroup.get('value')?.value;
  }

  public setControlValue(value: string){
    this.formGroup.get('value')?.setValue(value);
  }

  public input():void{
    this.onInput.emit(this.getInput()?.value);
  }
}
