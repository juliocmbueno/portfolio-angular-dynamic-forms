import {AppNavComponent} from '@dynamic-forms/app/app-nav/app-nav.component';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {AppNavItems} from '@dynamic-forms/app/app-nav/app-nav-item';

describe('AppNavComponent', () => {
  it('should create the component', function () {
    const component = new AppNavComponent(new AppNavService());
    expect(component).toBeTruthy();
    component.ngOnDestroy();
  });

  it('should have items after ngOnInit', function () {
    const component = new AppNavComponent(new AppNavService());
    component.ngOnInit();

    const items = Object.keys(AppNavItems).map(key => AppNavItems[key]);
    const componentItems = component.items;

    expect(componentItems.length).toEqual(items.length);
    componentItems.forEach(item => {
      expect(items.includes(item)).toBeTrue();
    });

    component.ngOnDestroy();
  });

  it('should have subscriptionActivetedItemChange after ngOnInit', function () {
    const component = new AppNavComponent(new AppNavService());
    component.ngOnInit();

    expect(component.subscriptionActivetedItemChange).toBeTruthy();

    component.ngOnDestroy();
  });

  it('should subscriptionActivetedItemChange be null after ngOnDestroy', function () {
    const component = new AppNavComponent(new AppNavService());
    component.ngOnInit();
    expect(component?.subscriptionActivetedItemChange?.closed).toBeFalse();

    component.ngOnDestroy();
    expect(component?.subscriptionActivetedItemChange?.closed).toBeTrue();
  });
});
