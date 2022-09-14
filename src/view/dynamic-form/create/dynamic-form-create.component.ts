import {Component, OnInit, ViewChild} from '@angular/core';
import {AppNavItems} from '@dynamic-forms/app/app-nav/app-nav-item';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";
import {DynamicFormElement, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";
import {DynamicFormCreateElementsComponent} from "@dynamic-forms/view/dynamic-form/create/elements/dynamic-form-create-elements.component";

@Component({
  templateUrl: './dynamic-form-create.component.html',
  styleUrls: ['dynamic-form-create.component.scss']
})
export class DynamicFormCreateComponent implements OnInit {

  form!: DynamicForm;

  @ViewChild('createElementsComponent', {static: false}) createElementsComponent!: DynamicFormCreateElementsComponent;

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.appNavService.setActivatedIten(AppNavItems['CREATE']);
  }

  private initForm():void{
    this.form = new DynamicForm();
  }

  public addNewElement():void{
    const element = new DynamicFormElement('', DynamicFormTypes.TEXT);
    this.form.addElement(element);
    this.createElementsComponent.edit(element);
  }
}
