import {Injectable} from '@angular/core';
import {AppNavItem} from '@dynamic-forms/app/app-nav/app-nav-item';
import {ReplaySubject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {

  activatedIten: AppNavItem|null = null;

  private activatedItemObservable:ReplaySubject<AppNavItem> = new ReplaySubject<AppNavItem>(1);

  constructor() {}

  public setActivatedIten(iten: AppNavItem){
    this.activatedIten = iten;
    this.activatedItemObservable.next(iten);
  }

  public getActivatedItem(): AppNavItem|null{
    return this.activatedIten;
  }

  public subscribeActivatedItemChance(callBack: (iten: AppNavItem) =>{}):Subscription{
    return this.activatedItemObservable.subscribe((item: AppNavItem) => callBack(item));
  }
}
