import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text-editable-on-click',
  templateUrl: './input-text-editable-on-click.component.html'
})
export class InputTextEditableOnClickComponent implements OnInit {

  @Input() inputStyle: { [klass: string]: any; } | null = null;
  @Input() inputId!: string;
  @Input() value: string | undefined;
  @Input() emptyText: string = 'Click to edit'
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

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
      value: []
    });
  }

  public edit():void{
    if(!this.editable){
      this.editable = true;
    }

    setTimeout(() => {
      const input: HTMLInputElement|null = document.querySelector<HTMLInputElement>(`#${this.inputId}`);
      input?.focus();
    }, 1);
  }

  public save():void{
    const value:string = this.formGroup.get('value')?.value;
    this.valueChange.emit(value);
    this.editable = false;
  }
}
