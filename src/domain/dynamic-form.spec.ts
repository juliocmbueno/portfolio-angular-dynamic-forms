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

    const element = new DynamicFormElement('Input Text', DynamicFormTypes.TEXT);
    form.addElement(element);

    expect(form.elements.includes(element)).toBeTrue()
  });

  it('should remove element', function () {
    const form = new DynamicForm('Title');

    const element_1 = new DynamicFormElement('Input Text', DynamicFormTypes.TEXT);
    form.addElement(element_1);

    const element_2 = new DynamicFormElement('Input Text', DynamicFormTypes.TEXT);
    form.addElement(element_2);

    expect(form.elements.includes(element_1)).toBeTrue();
    expect(form.elements.includes(element_2)).toBeTrue();

    form.removeElement(element_2);
    form.removeElement(element_2);

    expect(form.elements.includes(element_1)).toBeTrue();
    expect(form.elements.includes(element_2)).toBeFalse();
  });

  it('should return next element', function () {
    const form = new DynamicForm('Title');

    const previous = new DynamicFormElement('Previous', DynamicFormTypes.TEXT);
    form.addElement(previous);

    expect(form.nextElementOf(previous)).toBeFalsy();

    const next = new DynamicFormElement('Next', DynamicFormTypes.TEXT);
    form.addElement(next);

    expect(form.nextElementOf(previous)).toBe(next);
  });

  it('should return previous element', function () {
    const form = new DynamicForm('Title');

    const next = new DynamicFormElement('Next', DynamicFormTypes.TEXT);
    expect(form.previousElementOf(next)).toBeFalsy();

    const previous = new DynamicFormElement('Previous', DynamicFormTypes.TEXT);
    form.addElement(previous);
    form.addElement(next);

    expect(form.previousElementOf(next)).toBe(previous);
  });

  it('should return index of element', function () {
    const form = new DynamicForm('Title');

    const element = new DynamicFormElement('Next', DynamicFormTypes.TEXT);
    expect(form.indexOf(element)).toEqual(-1);

    form.addElement(element);
    expect(form.indexOf(element)).toEqual(0);
  });
});
