import {DynamicFormCreateTitleComponent} from "@dynamic-forms/view/dynamic-form/create/title/dynamic-form-create-title.component";

describe('DynamicFormCreateTitleComponent', () => {
  it('should create the DynamicFormCreateTitleComponent', () => {
    const component = new DynamicFormCreateTitleComponent();
    expect(component).toBeTruthy();
    expect(component.formTitleStyle).toBeTruthy();
  });
});
