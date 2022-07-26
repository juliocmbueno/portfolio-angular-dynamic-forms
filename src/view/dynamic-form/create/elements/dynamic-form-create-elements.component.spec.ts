import {TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementsComponent} from '@dynamic-forms/view/dynamic-form/create/elements/dynamic-form-create-elements.component';
import {DynamicFormElement, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";

describe('DynamicFormCreateElementsComponent', () => {
  let component: DynamicFormCreateElementsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementsComponent ]
    }).compileComponents();

    const fixture = TestBed.createComponent(DynamicFormCreateElementsComponent);
    component = fixture.componentInstance;
    component.form = new DynamicForm('DynamicFormCreateElementsComponent');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dragOnGoing).toBeFalse();
  });

  it('should edit element', () => {
    const element = new DynamicFormElement('Field', DynamicFormTypes.TEXT);
    component.edit(element);

    expect(component.editableElement).toBe(element);
  });

  it('should remove element', () => {
    const element = new DynamicFormElement('Field', DynamicFormTypes.TEXT);
    component.form.addElement(element);

    component.remove(element);

    expect(component.form.elements.includes(element)).toBeFalse();
  });

  it('should edit next element if exists after delete', () => {
    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes.TEXT);
    const nextElement = new DynamicFormElement('Next', DynamicFormTypes.TEXT);

    component.form.addElement(previousElement);
    component.form.addElement(nextElement);

    component.remove(previousElement);

    expect(component.editableElement).toBe(nextElement);
  });

  it('should edit previous element if next element not exists but previous yes', () => {
    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes.TEXT);
    const nextElement = new DynamicFormElement('Next', DynamicFormTypes.TEXT);

    component.form.addElement(previousElement);
    component.form.addElement(nextElement);

    component.remove(nextElement);

    expect(component.editableElement).toBe(previousElement);
  });

  it('should set dragOnGoing value', () => {
    component.setDragOnGoing(true);

    expect(component.dragOnGoing).toBeTrue();
  });

  it('should move elements in form after drop', () => {
    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes.TEXT);
    const nextElement = new DynamicFormElement('Next', DynamicFormTypes.TEXT);

    component.form.addElement(previousElement);
    component.form.addElement(nextElement);

    component.drop(0, 1);

    expect(component.form.elements[0]).toBe(nextElement);
    expect(component.form.elements[1]).toBe(previousElement);
  });
});
