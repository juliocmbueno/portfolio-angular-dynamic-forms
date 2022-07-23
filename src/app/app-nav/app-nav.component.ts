import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppNavIten, AppNavItens} from '@dynamic-forms/app/app-nav/app-nav-iten';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html'
})
export class AppNavComponent implements OnInit, OnDestroy {

  itens: AppNavIten[] = [];

  activatedItem: AppNavIten = AppNavItens['HOME'];

  subscriptionActivetedItemChange: Subscription|null = null;

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.inicializarItens();
    this.subscribeActivatedItemChance();
  }

  private inicializarItens(): void{
    this.itens = Object.keys(AppNavItens).map(key => AppNavItens[key]);
  }

  private subscribeActivatedItemChance(): void{
    this.subscriptionActivetedItemChange = this.appNavService.subscribeActivatedItemChance(item => this.activatedItem = item);
  }

  ngOnDestroy(): void {
    if(this.subscriptionActivetedItemChange){
      this.subscriptionActivetedItemChange.unsubscribe();
    }
  }
}
