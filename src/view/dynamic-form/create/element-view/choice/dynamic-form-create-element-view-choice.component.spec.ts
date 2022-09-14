import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DynamicFormCreateElementViewChoiceComponent} from '@dynamic-forms/view/dynamic-form/create/element-view/choice/dynamic-form-create-element-view-choice.component';
import {DynamicFormElement, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";
import {InputTextEditableOnClickComponent} from "@dynamic-forms/components/input-text-editable-on-click/input-text-editable-on-click.component";
import {QueryList} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {DynamicFormElementOption} from "@dynamic-forms/domain/dynamic-form-element-option";
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";

describe('DynamicFormCreateElementViewRadioComponent', () => {
  let component: DynamicFormCreateElementViewChoiceComponent;
  let fixture: ComponentFixture<DynamicFormCreateElementViewChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoModule],
      providers: [TranslocoService],
      declarations: [ DynamicFormCreateElementViewChoiceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreateElementViewChoiceComponent);
    component = fixture.componentInstance;
    component.element = new DynamicFormElement('Radio Element', DynamicFormTypes.RADIO);
    component.ngOnInit();

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
    });
  }));

  it('should add new option without duplicate name when nameAux is not correct', () => {
    component.addOption();
    component.addOption();

    expect(component.element.options.length).toEqual(2);
    expect(component.nameAux).toEqual(3);

    component.nameAux = 1;

    component.addOption();

    const option = component.element.options[2];
    expect(option.value).toEqual('en.dynamicForm.newOption 3');
    expect(component.nameAux).toEqual(4);
  });

  it('should update option value', () => {
    component.addOption();
    const option = component.element.options[0];

    component.updateOption(option, 'New value option');

    expect(option.value).toEqual('New value option');
  });

  it('should define a new option value when de value is empty', () => {
    const inputEditable: InputTextEditableOnClickComponent = component.inputsEditable.last;
    inputEditable.ngOnInit();
    inputEditable.setControlValue('');

    component.addOption();
    const option = component.element.options[0];

    component.updateOption(option, '');

    const newValue = `en.dynamicForm.newOption ${component.nameAux - 1}`;
    expect(option.value).toEqual(newValue);
    expect(inputEditable.getControlValue()).toEqual(newValue);
  });

  it('should not update value with exists an exception', () => {
    const inputEditable: InputTextEditableOnClickComponent = component.inputsEditable.last;
    inputEditable.ngOnInit();
    inputEditable.setControlValue('');

    component.addOption();
    const option = component.element.options[0];
    option.value = 'Old value';

    component.exceptions[option.elementId.value] = 'Exception';

    component.updateOption(option, 'New value');

    expect(option.value).toEqual('Old value');
    expect(inputEditable.getControlValue()).toEqual('Old value');
    expect(component.exceptions[option.elementId.value]).toBeFalsy();
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

  it('should editNext when tab keydown in btn remove', () => {
    component.addOption();
    const previous = component.element.options[0];

    expect(component.element.options.length).toEqual(1);

    component.onRemoveBtnTagKeyDown(new Event(''), previous);

    expect(component.element.options.length).toEqual(2);
  });

  it('should add duplicate exception', () => {
    component.addOption();
    const option_1 = component.element.options[0];

    component.addOption();
    const option_2 = component.element.options[1];

    component.onInputValue(option_1.value, option_2);

    expect(component.exceptions[option_2.elementId.value]).toEqual('Duplicated Value')
  });

  it('should set dragOnGoing value', () => {
    component.setDragOnGoing(true);

    expect(component.dragOnGoing).toBeTrue();
  });

  it('should move option in element after drop', () => {
    const previousElement = new DynamicFormElementOption('Previous');
    const nextElement = new DynamicFormElementOption('Next');

    component.element.addOption(previousElement);
    component.element.addOption(nextElement);

    component.drop(0, 1);

    expect(component.element.options[0]).toBe(nextElement);
    expect(component.element.options[1]).toBe(previousElement);
  });
});
