import {DynamicFormCreateComponent} from '@dynamic-forms/view/dynamic-form/create/dynamic-form-create.component';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {AppNavItens} from '@dynamic-forms/app/app-nav/app-nav-iten';

describe('DynamicFormCreateComponent', () => {
  it('should create the IndexComponent', () => {
    const component = new DynamicFormCreateComponent(new AppNavService());
    expect(component).toBeTruthy();
  });

  it('should AppNavItens.CREATE Activated after ngOnInit', () => {
    const appNavService = new AppNavService();

    new DynamicFormCreateComponent(appNavService).ngOnInit();

    expect(appNavService.getActivatedItem()).toEqual(AppNavItens['CREATE']);
  });
});
