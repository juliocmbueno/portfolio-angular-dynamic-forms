import {Component, OnInit} from '@angular/core';
import {AppNavItems} from '@dynamic-forms/app/app-nav/app-nav-item';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  templateUrl: './dynamic-form-create.component.html',
  styleUrls: ['dynamic-form-create.component.scss']
})
export class DynamicFormCreateComponent implements OnInit {

  form!: DynamicForm;

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.appNavService.setActivatedIten(AppNavItems['CREATE']);
  }

  private initForm():void{
    this.form = new DynamicForm('Click to set title');
    this.form.description = 'Short description';
  }

  public addNewElement():void{
    this.form.addElement(new DynamicFormElement('Test', "TEXT"));
  }
}
