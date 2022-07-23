import {Component, OnInit} from '@angular/core';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {AppNavItens} from '@dynamic-forms/app/app-nav/app-nav-iten';

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.appNavService.setActivatedIten(AppNavItens['HOME']);
  }

}
