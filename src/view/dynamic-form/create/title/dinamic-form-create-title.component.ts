import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dinamic-form-create-title',
  templateUrl: './dinamic-form-create-title.component.html',
  styleUrls: ['dinamic-form-create-title.component.scss']
})
export class DinamicFormCreateTitleComponent implements OnInit {

  @Input() title: string|undefined;
  @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();

  editable:boolean = false;
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  private inicializarFormGroup():void{
    this.formGroup = this.formBuilder.group({
      title: []
    });
  }

  ngOnInit(): void {
    this.inicializarFormGroup();
  }

  public editTitle():void{
    if(!this.editable){
      this.editable = true;
      this.formGroup.get('title')?.setValue(this.title);
    }

    setTimeout(() => {
      const btn: HTMLButtonElement|null = document.querySelector<HTMLButtonElement>('#form-title');
      btn?.focus();
    }, 100);
  }

  public saveTitle():void{
    if(this.formGroup.valid){
      this.titleChange.emit(this.formGroup.get('title')?.value);
      this.editable = false;
    }
  }
}
