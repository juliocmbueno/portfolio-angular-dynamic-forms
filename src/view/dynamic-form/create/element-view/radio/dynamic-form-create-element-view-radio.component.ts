import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  selector: 'app-dynamic-form-create-element-view-radio',
  templateUrl: './dynamic-form-create-element-view-radio.component.html'
})
export class DynamicFormCreateElementViewRadioComponent implements OnInit {

  @Input() element!: DynamicFormElement;

  constructor() { }

  ngOnInit(): void {
  }

}
