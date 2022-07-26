import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppNavItem, AppNavItems} from '@dynamic-forms/app/app-nav/app-nav-item';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit, OnDestroy {

  items: AppNavItem[] = [];

  activatedItem?: AppNavItem;
  subscriptionActivetedItemChange!: Subscription;

  showGitBtn: boolean = false;

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.initItems();
    this.subscribeActivatedItemChance();
  }

  private initItems(): void{
    this.items = Object.keys(AppNavItems).map(key => AppNavItems[key]);
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
