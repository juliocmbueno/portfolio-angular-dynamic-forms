import {DynamicFormElement, DynamicFormElementType, DynamicFormTypes} from '@dynamic-forms/domain/dynamic-form-element';
import {DynamicFormElementOption} from "@dynamic-forms/domain/dynamic-form-element-option";

describe('DynamicFormElement', () => {
  it('should create', function () {
    const element = new DynamicFormElement('Name', DynamicFormTypes['TEXT']);

    expect(element).toBeTruthy();
    expect(element.elementId).toBeTruthy();
    expect(element.label).toBe('Name');
    expect(element.type?.elementType).toBe('TEXT');
    expect(element.required).toBeFalse();
  });

  it('should add some option', function () {
    const element = new DynamicFormElement('Name', DynamicFormTypes['TEXT']);
    const option = new DynamicFormElementOption('Option 1');

    element.addOption(option);

    expect(element.options.includes(option)).toBeTrue();
  });

  it('should remove option', function () {
    const element = new DynamicFormElement('Name', DynamicFormTypes['TEXT']);

    const option_1 = new DynamicFormElementOption('Option 1');
    element.addOption(option_1);

    const option_2 = new DynamicFormElementOption('Option 2');
    element.addOption(option_2);

    expect(element.options.includes(option_1)).toBeTrue();
    expect(element.options.includes(option_2)).toBeTrue();

    element.removeOption(option_2);
    element.removeOption(option_2);

    expect(element.options.includes(option_1)).toBeTrue();
    expect(element.options.includes(option_2)).toBeFalse();
  });

  it('should return next option', function () {
    const element = new DynamicFormElement('Name', DynamicFormTypes['TEXT']);

    const previous = new DynamicFormElementOption('Previous');
    element.addOption(previous);

    expect(element.nextOptionOf(previous)).toBeFalsy();

    const next = new DynamicFormElementOption('Next');
    element.addOption(next);

    expect(element.nextOptionOf(previous)).toBe(next);
  });

  it('should return previous option', function () {
    const element = new DynamicFormElement('Name', DynamicFormTypes['TEXT']);

    const next = new DynamicFormElementOption('Next');
    expect(element.previousOptionOf(next)).toBeFalsy();

    const previous = new DynamicFormElementOption('Previous');
    element.addOption(previous);
    element.addOption(next);

    expect(element.previousOptionOf(next)).toBe(previous);
  });

  it('should return index of option', function () {
    const element = new DynamicFormElement('Name', DynamicFormTypes['TEXT']);

    const option = new DynamicFormElementOption('Option');
    expect(element.indexOf(option)).toEqual(-1);

    element.addOption(option);
    expect(element.indexOf(option)).toEqual(0);
  });
});

describe('DynamicFormTypes', () => {
  it('should be TEXT', function () {
    const dynamicFormElementType:DynamicFormElementType = DynamicFormTypes['TEXT'];

    expect(dynamicFormElementType.label).toEqual('Short Text');
    expect(dynamicFormElementType.elementType).toEqual('TEXT');
    expect(dynamicFormElementType.icon).toEqual('fa-solid fa-grip-lines');
  });

  it('should be TEXTAREA', function () {
    const dynamicFormElementType:DynamicFormElementType = DynamicFormTypes['TEXTAREA'];

    expect(dynamicFormElementType.label).toEqual('Long Text');
    expect(dynamicFormElementType.elementType).toEqual('TEXTAREA');
    expect(dynamicFormElementType.icon).toEqual('fa-solid fa-align-left');
  });

  it('should be RADIO', function () {
    const dynamicFormElementType:DynamicFormElementType = DynamicFormTypes['RADIO'];

    expect(dynamicFormElementType.label).toEqual('Single Choice');
    expect(dynamicFormElementType.elementType).toEqual('RADIO');
    expect(dynamicFormElementType.icon).toEqual('fa-solid fa-circle-dot');
  });

  it('should be CHECKBOX', function () {
    const dynamicFormElementType:DynamicFormElementType = DynamicFormTypes['CHECKBOX'];

    expect(dynamicFormElementType.label).toEqual('Multiple Choice');
    expect(dynamicFormElementType.elementType).toEqual('CHECKBOX');
    expect(dynamicFormElementType.icon).toEqual('fa-solid fa-square-check');
  });
});
