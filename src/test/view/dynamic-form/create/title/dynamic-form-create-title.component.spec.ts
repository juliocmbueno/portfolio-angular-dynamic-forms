import {FormBuilder} from "@angular/forms";
import {DynamicFormCreateTitleComponent} from "@dynamic-forms/view/dynamic-form/create/title/dynamic-form-create-title.component";

describe('DynamicFormCreateTitleComponent', () => {
  it('should create the DynamicFormCreateTitleComponent', () => {
    const component = new DynamicFormCreateTitleComponent(new FormBuilder());
    expect(component).toBeTruthy();
    expect(component.titleChange).toBeTruthy();
  });

  it('should be init formGroup after ngOnInit', () => {
    const component = new DynamicFormCreateTitleComponent(new FormBuilder());
    component.ngOnInit();

    const formGroup = component.formGroup;
    expect(formGroup.contains('title')).toBeTrue();
  });

  it(`should save 'Click to set title' when formGroup.title is null`, () => {
    const component = new DynamicFormCreateTitleComponent(new FormBuilder());
    component.ngOnInit();

    spyOn(component.titleChange, 'emit');

    component.saveTitle();

    expect(component.editable).toBeFalse();
    expect(component.titleChange.emit).toHaveBeenCalledWith('Click to set title');
  });

  it(`should save formGroup.title when is not null`, () => {
    const component = new DynamicFormCreateTitleComponent(new FormBuilder());
    component.ngOnInit();

    spyOn(component.titleChange, 'emit');

    const titleValue = 'Title value';
    component.formGroup.get('title')?.setValue(titleValue);

    component.saveTitle();

    expect(component.editable).toBeFalse();
    expect(component.titleChange.emit).toHaveBeenCalledWith(titleValue);
  });

  it('should be editable true after editTitle', () => {
    const component = new DynamicFormCreateTitleComponent(new FormBuilder());
    component.ngOnInit();

    component.editTitle();

    expect(component.editable).toBeTrue();
  });
});
