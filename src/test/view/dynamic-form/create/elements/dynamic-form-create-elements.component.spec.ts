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

  it('should not remove if not equals to editableElement', () => {
    const element = new DynamicFormElement('Field', DynamicFormTypes['TEXT']);
    component.elements.push(element);

    component.remove(element);

    expect(component.elements.includes(element)).toBeTrue();
  });

  it('should remove element', () => {
    const element = new DynamicFormElement('Field', DynamicFormTypes['TEXT']);
    component.elements.push(element);

    component.edit(element);
    component.remove(element);

    expect(component.elements.includes(element)).toBeFalse();
  });
});
