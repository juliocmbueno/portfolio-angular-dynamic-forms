import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-textarea-editable-on-click',
  templateUrl: './input-textarea-editable-on-click.component.html'
})
export class InputTextareaEditableOnClickComponent implements OnInit {

  @Input() inputStyle: { [klass: string]: any; } | null = null;
  @Input() valueStyle: { [klass: string]: any; } | null = null;
  @Input() inputId!: string;
  @Input() emptyText: string = 'Click to edit'
  @Input() value: string | undefined = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  editable:boolean = false;
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup():void {
    this.formGroup = this.formBuilder.group({
      value: [this.value]
    });
  }

  public save():void {
    const value:string = this.formGroup.get('value')?.value;
    this.valueChange.emit(value);
    this.editable = false;
  }

  public edit():void{
    if(!this.editable){
      this.editable = true;

      setTimeout(() => {
        const textarea = this.getTextarea();
        textarea?.focus();
        setTimeout(() => textarea?.select(), 1);
      }, 1);
    }
  }

  private getTextarea(): HTMLInputElement|null{
    return document.querySelector<HTMLInputElement>(`#${this.inputId}`);
  }
}
