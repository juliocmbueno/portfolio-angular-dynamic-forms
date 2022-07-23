import {Injectable} from '@angular/core';
import {AppNavIten} from '@dynamic-forms/app/app-nav/app-nav-iten';
import {ReplaySubject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {

  activatedIten: AppNavIten|null = null;

  private activatedItemObservable:ReplaySubject<AppNavIten> = new ReplaySubject<AppNavIten>(1);

  constructor() {}

  public setActivatedIten(iten: AppNavIten){
    this.activatedIten = iten;
    this.activatedItemObservable.next(iten);
  }

  public getActivatedItem(): AppNavIten|null{
    return this.activatedIten;
  }

  public subscribeActivatedItemChance(callBack: (iten: AppNavIten) =>{}):Subscription{
    return this.activatedItemObservable.subscribe((item: AppNavIten) => callBack(item));
  }
}
