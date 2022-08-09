import {DynamicForm} from '@dynamic-forms/domain/dynamic-form';
import {DynamicFormElement, DynamicFormTypes} from '@dynamic-forms/domain/dynamic-form-element';

describe('DynamicForm', () => {
  it('should create', function () {
    const form = new DynamicForm('Title');

    expect(form).toBeTruthy();
    expect(form.title).toBe('Title');
    expect(form.elements.length).toBe(0);
  });

  it('should add some element', function () {
    const form = new DynamicForm('Title');
    form.addElement(new DynamicFormElement('Input Text', DynamicFormTypes['TEXT']));

    expect(form.elements.length).toBe(1);
  });
});
