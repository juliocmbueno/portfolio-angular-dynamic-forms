import {DynamicFormCreateDescriptionComponent} from "@dynamic-forms/view/dynamic-form/create/description/dynamic-form-create-description.component";
import {FormBuilder} from "@angular/forms";

describe('DynamicFormCreateDescriptionComponent', () => {
  it('should create the DynamicFormCreateDescriptionComponent', () => {
    const component = new DynamicFormCreateDescriptionComponent(new FormBuilder());
    expect(component).toBeTruthy();
    expect(component.descriptionChange).toBeTruthy();
  });

  it('should be init formGroup after ngOnInit', () => {
    const component = new DynamicFormCreateDescriptionComponent(new FormBuilder());
    component.ngOnInit();

    const formGroup = component.formGroup;
    expect(formGroup.contains('description')).toBeTrue();
  });

  it(`should save 'Short description' when formGroup.description is null`, () => {
    const component = new DynamicFormCreateDescriptionComponent(new FormBuilder());
    component.ngOnInit();

    spyOn(component.descriptionChange, 'emit');

    component.saveDescription();

    expect(component.editable).toBeFalse();
    expect(component.descriptionChange.emit).toHaveBeenCalledWith('Short description');
  });

  it(`should save formGroup.description when is not null`, () => {
    const component = new DynamicFormCreateDescriptionComponent(new FormBuilder());
    component.ngOnInit();

    spyOn(component.descriptionChange, 'emit');

    const descriptionValue = 'Description value';
    component.formGroup.get('description')?.setValue(descriptionValue);

    component.saveDescription();

    expect(component.editable).toBeFalse();
    expect(component.descriptionChange.emit).toHaveBeenCalledWith(descriptionValue);
  });

  it('should be editable true after editDescription', () => {
    const autosize = () => {};
    (window as any).autosize = autosize;

    const component = new DynamicFormCreateDescriptionComponent(new FormBuilder());
    component.ngOnInit();

    component.editDescription();

    expect(component.editable).toBeTrue();
  });

  it('should invoke autosize on autoSizeTextarea', () => {
    let invoked = false;
    const autosize = () => invoked = true;
    (window as any).autosize = autosize;

    const component = new DynamicFormCreateDescriptionComponent(new FormBuilder());
    component.autoSizeTextarea();

    expect(invoked).toBeTrue();
  });
});
