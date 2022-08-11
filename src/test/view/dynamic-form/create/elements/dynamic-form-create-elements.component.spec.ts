import {TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementsComponent} from '@dynamic-forms/view/dynamic-form/create/elements/dynamic-form-create-elements.component';
import {DynamicFormElement, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";

describe('DynamicFormCreateElementsComponent', () => {
  let component: DynamicFormCreateElementsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementsComponent ]
    }).compileComponents();

    const fixture = TestBed.createComponent(DynamicFormCreateElementsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should types.length greater than 0', () => {
    component.ngOnInit();
    expect(component.types.length).toBeGreaterThan(0);
  });

  it('should edit element', () => {
    const element = new DynamicFormElement('Field', DynamicFormTypes['TEXT']);
    component.edit(element);

    expect(component.editableElement).toBe(element);
  });

  it('should edit next element if exists after goNextOnRemoveButtonTab', () => {
    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes['TEXT']);
    const nextElement = new DynamicFormElement('Next', DynamicFormTypes['TEXT']);

    component.elements.push(previousElement);
    component.elements.push(nextElement);

    component.edit(previousElement);

    component.goNextOnRemoveButtonTab(new Event(''));

    expect(component.editableElement).toBe(nextElement);
  });

  it('should create new element if next element not exists after execute goNextOnRemoveButtonTab', () => {
    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes['TEXT']);
    component.elements.push(previousElement);

    component.edit(previousElement);

    component.goNextOnRemoveButtonTab(new Event(''));

    expect(component.elements.length).toEqual(2);
  });

  it('should remove element', () => {
    const element = new DynamicFormElement('Field', DynamicFormTypes['TEXT']);
    component.elements.push(element);

    component.remove(element);

    expect(component.elements.includes(element)).toBeFalse();
  });

  it('should edit next element if exists after delete', () => {
    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes['TEXT']);
    const nextElement = new DynamicFormElement('Next', DynamicFormTypes['TEXT']);

    component.elements.push(previousElement);
    component.elements.push(nextElement);

    component.remove(previousElement);

    expect(component.editableElement).toBe(nextElement);
  });

  it('should edit previous element if next element not exists but previous yes', () => {
    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes['TEXT']);
    const nextElement = new DynamicFormElement('Next', DynamicFormTypes['TEXT']);

    component.elements.push(previousElement);
    component.elements.push(nextElement);

    component.remove(nextElement);

    expect(component.editableElement).toBe(previousElement);
  });
});
