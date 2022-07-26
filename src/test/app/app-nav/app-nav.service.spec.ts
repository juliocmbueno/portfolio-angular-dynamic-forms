import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {AppNavItem} from '@dynamic-forms/app/app-nav/app-nav-item';

describe('AppNavService', ()=>{
  it('should create the service', () => {
    const service = new AppNavService();
    expect(service).toBeTruthy();
  });

  it('should change activatedIten', () => {
    const service = new AppNavService();

    const iten: AppNavItem = {
      label: 'test',
      routerLink: '/'
    };

    service.setActivatedIten(iten);

    expect(service.getActivatedItem()).toEqual(iten);
  });

  it('should notify observables after activatedIten chance', () => {
    let itenTemp:any = null;
    const service = new AppNavService();
    const subscription = service.subscribeActivatedItemChance(iten => itenTemp = iten);

    const item: AppNavItem = {
      label: 'test',
      routerLink: '/'
    };
    service.setActivatedIten(item);

    expect(service.getActivatedItem()).toEqual(itenTemp);

    subscription.unsubscribe();
  });
});
