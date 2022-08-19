import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  selector: 'app-dynamic-form-create-element-view-checkbox',
  templateUrl: './dynamic-form-create-element-view-checkbox.component.html'
})
export class DynamicFormCreateElementViewCheckboxComponent implements OnInit {

  @Input() element!: DynamicFormElement;

  constructor() { }

  ngOnInit(): void {
  }

}
