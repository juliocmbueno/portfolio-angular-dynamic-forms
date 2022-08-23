import {DynamicFormElementOption} from './dynamic-form-element-option';

describe('DynamicFormElementOption', () => {
  it('should create an instance', () => {
    const option = new DynamicFormElementOption('Option');
    expect(option).toBeTruthy();
    expect(option.elementId).toBeTruthy();

    console.log(option.elementId);
  });
});
