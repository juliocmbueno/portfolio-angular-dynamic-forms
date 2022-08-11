import {DynamicFormElement, DynamicFormElementType, DynamicFormTypes} from '@dynamic-forms/domain/dynamic-form-element';

describe('DynamicFormElement', () => {
  it('should create', function () {
    const input = new DynamicFormElement('Name', DynamicFormTypes['TEXT']);

    expect(input).toBeTruthy();
    expect(input.label).toBe('Name');
    expect(input.type?.elementType).toBe('TEXT');
    expect(input.required).toBeFalse();
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
});
