import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

declare var autosize:any;

@Component({
  selector: 'app-dinamic-form-create-description',
  templateUrl: './dinamic-form-create-description.component.html',
  styleUrls: ['./dinamic-form-create-description.component.scss']
})
export class DinamicFormCreateDescriptionComponent implements OnInit {

  @Input() description?: string;
  @Output() descriptionChange: EventEmitter<string> = new EventEmitter<string>();

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
      description: []
    });
  }

  public saveDescription():void {
    const description:string = this.formGroup.get('description')?.value;
    this.descriptionChange.emit(  description || 'Short description');
    this.editable = false;
  }

  public editDescription():void{
    if(!this.editable){
      this.editable = true;
    }

    setTimeout(() => {
      const input: HTMLInputElement|null = document.querySelector<HTMLInputElement>('#form-description');
      input?.focus();
      this.autoSizeTextarea();
    }, 1);
  }

  public autoSizeTextarea():void{
    const input: HTMLInputElement|null = document.querySelector<HTMLInputElement>('#form-description');
    autosize(input);
  }
}
