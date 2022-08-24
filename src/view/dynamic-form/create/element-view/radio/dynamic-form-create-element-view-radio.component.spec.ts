import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DynamicFormCreateElementViewRadioComponent} from '@dynamic-forms/view/dynamic-form/create/element-view/radio/dynamic-form-create-element-view-radio.component';
import {DynamicFormElement, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";
import {InputTextEditableOnClickComponent} from "@dynamic-forms/components/input-text-editable-on-click/input-text-editable-on-click.component";
import {QueryList} from "@angular/core";
import {FormBuilder} from "@angular/forms";

describe('DynamicFormCreateElementViewRadioComponent', () => {
  let component: DynamicFormCreateElementViewRadioComponent;
  let fixture: ComponentFixture<DynamicFormCreateElementViewRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementViewRadioComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreateElementViewRadioComponent);
    component = fixture.componentInstance;
    component.element = new DynamicFormElement('Radio Element', DynamicFormTypes['RADIO']);

    component.inputsEditable = new QueryList<InputTextEditableOnClickComponent>();
    component.inputsEditable.reset([new InputTextEditableOnClickComponent(new FormBuilder())]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new option', fakeAsync(() => {
    expect(component.element.options.length).toBe(0);

    component.addOption();
    tick(30);

    fixture.whenStable().then(() => {
      expect(component.element.options.length).toBe(1);
      expect(component.inputsEditable.last.editable).toBeTrue();
    })
  }));

  it('should update option value', () => {
    component.addOption();
    const option = component.element.options[0];

    component.updateOption(option, 'New value option');

    expect(option.value).toEqual('New value option');
  });

  it('should remove option value', () => {
    component.addOption();
    const option = component.element.options[0];

    component.remove(option);

    expect(component.element.options.includes(option)).toBeFalse();
  });

  it('should set option value empty when input value is empty but option value is not', () => {
    component.addOption();
    const option = component.element.options[0];

    const inputEditable: InputTextEditableOnClickComponent = component.inputsEditable.last;
    inputEditable.ngOnInit();
    inputEditable.formGroup.get('value')?.setValue('');

    component.deleteOptionIfEmpty(new Event(''), option);
    expect(option.value.length).toEqual(0);
    expect(component.element.options.includes(option)).toBeTrue();
  });

  it('should delete option if option value and input value is empty ', () => {
    component.addOption();
    const option = component.element.options[0];
    option.value = '';

    const inputEditable: InputTextEditableOnClickComponent = component.inputsEditable.last;
    inputEditable.ngOnInit();
    inputEditable.formGroup.get('value')?.setValue('');

    component.deleteOptionIfEmpty(new Event(''), option);
    expect(component.element.options.includes(option)).toBeFalse();
  });

  it('should edit previous', () => {
    component.addOption();
    component.addOption();

    const next = component.element.options[1];

    component.inputsEditable.reset([
      new InputTextEditableOnClickComponent(new FormBuilder()),
      new InputTextEditableOnClickComponent(new FormBuilder()),
    ]);

    component.editPrevious(next);

    expect(component.inputsEditable.get(0)?.editable).toBeTrue();
  });

  it('should edit next with exists', () => {
    component.addOption();
    component.addOption();

    const previous = component.element.options[0];

    component.inputsEditable.reset([
      new InputTextEditableOnClickComponent(new FormBuilder()),
      new InputTextEditableOnClickComponent(new FormBuilder()),
    ]);

    component.editNext(previous);

    expect(component.inputsEditable.get(1)?.editable).toBeTrue();
  });

  it('should create a new option when next does not exist in editNext', () => {
    component.addOption();
    const previous = component.element.options[0];

    expect(component.element.options.length).toEqual(1);

    component.editNext(previous);

    expect(component.element.options.length).toEqual(2);
  });
});
