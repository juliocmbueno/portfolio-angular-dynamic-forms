import {Component, OnInit} from '@angular/core';
import {AppNavItens} from '@dynamic-forms/app/app-nav/app-nav-iten';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';

@Component({
  templateUrl: './dynamic-form-create.component.html'
})
export class DynamicFormCreateComponent implements OnInit {

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.appNavService.setActivatedIten(AppNavItens['CREATE']);
  }
}
