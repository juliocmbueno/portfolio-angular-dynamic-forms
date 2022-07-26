import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dinamic-form-create-title',
  templateUrl: './dinamic-form-create-title.component.html',
  styleUrls: ['dinamic-form-create-title.component.scss']
})
export class DinamicFormCreateTitleComponent implements OnInit, OnChanges {

  @Input() title: string | undefined;
  @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();

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
      title: []
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title'] && !this.title){
      this.title = 'Click to set title'
    }
  }

  public editTitle():void{
    if(!this.editable){
      this.editable = true;
    }

    setTimeout(() => {
      const input: HTMLInputElement|null = document.querySelector<HTMLInputElement>('#form-title');
      input?.focus();
    }, 100);
  }

  public saveTitle():void{
    this.titleChange.emit(this.formGroup.get('title')?.value);
    this.editable = false;
  }
}
