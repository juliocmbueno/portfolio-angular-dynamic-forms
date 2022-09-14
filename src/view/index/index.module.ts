import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from '@dynamic-forms/view/index/index.component';
import {IndexRoutingModule} from '@dynamic-forms/view/index/index-routing.module';
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    TranslocoModule
  ]
})
export class IndexModule { }
