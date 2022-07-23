import {DynamicFormElement} from '@dynamic-forms/domain/dynamic-form-element';

describe('DynamicFormElement', () => {
  it('should create', function () {
    const input = new DynamicFormElement('Name', 'TEXT');

    expect(input).toBeTruthy();
    expect(input.label).toBe('Name');
    expect(input.type).toBe('TEXT');
  });
});
