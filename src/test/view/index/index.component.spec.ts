import {IndexComponent} from '@dynamic-forms/view/index/index.component';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {AppNavItems} from '@dynamic-forms/app/app-nav/app-nav-item';

describe('IndexComponent', () => {
  it('should create the IndexComponent', () => {
    const component = new IndexComponent(new AppNavService());
    expect(component).toBeTruthy();
  });

  it('should AppNavItems.HOME Activated after ngOnInit', () => {
    const appNavService = new AppNavService();

    new IndexComponent(appNavService).ngOnInit();

    expect(appNavService.getActivatedItem()).toEqual(AppNavItems['HOME']);
  });
});
