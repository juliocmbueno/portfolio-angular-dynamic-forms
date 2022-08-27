import {TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementConfigComponent} from '@dynamic-forms/view/dynamic-form/create/element-config/dynamic-form-create-element-config.component';
import {DynamicFormElement, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";
import {DynamicForm} from "@dynamic-forms/domain/dynamic-form";
import {DynamicFormElementOption} from "@dynamic-forms/domain/dynamic-form-element-option";

describe('DynamicFormCreateElementConfigComponent', () => {
  let component: DynamicFormCreateElementConfigComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementConfigComponent ]
    }).compileComponents();

    const fixture = TestBed.createComponent(DynamicFormCreateElementConfigComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should types.length greater than 0', () => {
    component.ngOnInit();
    expect(component.types.length).toBeGreaterThan(0);
  });

  it('should edit next element if exists after onDeleteButtonTab', () => {
    spyOn(component.editNext, 'emit');
    component.form = new DynamicForm('DynamicFormCreateElementConfigComponent');

    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes['TEXT']);
    component.form.addElement(previousElement);
    component.element = previousElement;

    const nextElement = new DynamicFormElement('Next', DynamicFormTypes['TEXT']);
    component.form.addElement(nextElement);

    component.onDeleteButtonTab(new Event(''));

    expect(component.editNext.emit).toHaveBeenCalledWith(nextElement);
  });

  it('should create new element if next element not exists after execute onDeleteButtonTab', () => {
    spyOn(component.editNext, 'emit');

    component.form = new DynamicForm('DynamicFormCreateElementConfigComponent');

    const previousElement = new DynamicFormElement('Previous', DynamicFormTypes['TEXT']);
    component.form.addElement(previousElement);
    component.element = previousElement;

    component.onDeleteButtonTab(new Event(''));

    expect(component.form.elements.length).toEqual(2);

    const nextElement = component.form.nextElementOf(previousElement);
    expect(component.editNext.emit).toHaveBeenCalledWith(nextElement);
  });

  it('should remove element', () => {
    spyOn(component.onRemove, 'emit');

    component.form = new DynamicForm('DynamicFormCreateElementConfigComponent');

    const element = new DynamicFormElement('Element', DynamicFormTypes['TEXT']);
    component.form.addElement(element);
    component.element = element;

    component.remove();

    expect(component.form.elements.includes(element)).toBeFalse()
    expect(component.onRemove.emit).toHaveBeenCalledTimes(1);
  });

  it('should sanitize the element', () => {
    const element = new DynamicFormElement('Element', DynamicFormTypes['RADIO']);
    element.addOption(new DynamicFormElementOption('Option One'));
    component.element = element;

    const typeText = DynamicFormTypes['TEXT'];
    spyOn(typeText, 'sanitizeElement');
    component.onTypeChange(typeText);

    expect(typeText.sanitizeElement).toHaveBeenCalledWith(element);
  });
});
