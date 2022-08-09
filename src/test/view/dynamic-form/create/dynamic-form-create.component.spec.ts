import {DynamicFormCreateComponent} from '@dynamic-forms/view/dynamic-form/create/dynamic-form-create.component';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {AppNavItems} from '@dynamic-forms/app/app-nav/app-nav-item';
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";
import {DynamicFormCreateElementsComponent} from "@dynamic-forms/view/dynamic-form/create/elements/dynamic-form-create-elements.component";

describe('DynamicFormCreateComponent', () => {
  it('should create the DynamicFormCreateComponent', () => {
    const component = new DynamicFormCreateComponent(new AppNavService());
    expect(component).toBeTruthy();
  });

  it('should AppNavItems.CREATE Activated after ngOnInit', () => {
    const appNavService = new AppNavService();

    new DynamicFormCreateComponent(appNavService).ngOnInit();

    expect(appNavService.getActivatedItem()).toEqual(AppNavItems['CREATE']);
  });

  it('should create form after ngOnInit', () => {
    const appNavService = new AppNavService();

    const component = new DynamicFormCreateComponent(appNavService);
    component.ngOnInit();

    const form: DynamicForm = component.form;
    expect(form.title).toEqual('Click to set title');

    expect(form.description).toEqual('Short description');
    expect(form.elements.length).toEqual(0);
  });

  it('should add new element on form', () => {
    const appNavService = new AppNavService();
    const createElementsComponent = new DynamicFormCreateElementsComponent();

    const component = new DynamicFormCreateComponent(appNavService);
    component.createElementsComponent = createElementsComponent;

    spyOn(component.createElementsComponent, 'edit');

    component.ngOnInit();
    component.addNewElement();

    const form: DynamicForm = component.form;
    expect(form.elements.length).toEqual(1);

    const element = form.elements[0];
    expect(element.label).toEqual('');
    expect(element.type?.elementType).toEqual('TEXT');
    expect(component.createElementsComponent.edit).toHaveBeenCalledWith(element);
  });
});
