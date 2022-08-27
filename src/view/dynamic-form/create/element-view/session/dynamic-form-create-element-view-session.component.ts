import {Component, Input, OnInit} from '@angular/core';
import {DynamicFormElement} from "@dynamic-forms/domain/dynamic-form-element";

@Component({
  selector: 'app-dynamic-form-create-element-view-session',
  templateUrl: './dynamic-form-create-element-view-session.component.html',
  styleUrls: ['./dynamic-form-create-element-view-session.component.scss']
})
export class DynamicFormCreateElementViewSessionComponent implements OnInit {

  @Input() element!: DynamicFormElement;

  constructor() { }

  ngOnInit(): void {
  }

}
