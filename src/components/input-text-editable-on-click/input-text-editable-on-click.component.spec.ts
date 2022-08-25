import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputTextEditableOnClickComponent} from './input-text-editable-on-click.component';
import {FormBuilder} from "@angular/forms";

describe('InputTextEditableOnClickComponent', () => {
  let component: InputTextEditableOnClickComponent;
  let fixture: ComponentFixture<InputTextEditableOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextEditableOnClickComponent ],
      providers: [ FormBuilder ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextEditableOnClickComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be init formGroup after ngOnInit', () => {
    component.ngOnInit();

    const formGroup = component.formGroup;
    expect(formGroup.contains('value')).toBeTrue();
  });

  it(`should emit value when save`, () => {
    component.ngOnInit();

    spyOn(component.valueChange, 'emit');

    component.formGroup.get('value')?.setValue('Emitted Value')
    component.save();

    expect(component.editable).toBeFalse();
    expect(component.valueChange.emit).toHaveBeenCalledWith('Emitted Value');
  });

  it('should be editable true after edit', () => {
    component.ngOnInit();

    component.edit();

    expect(component.editable).toBeTrue();
  });

  it(`should get formcontrol's formgroup value`, () => {
    component.ngOnInit();

    component.formGroup.get('value')?.setValue('New Value');

    expect(component.getControlValue()).toEqual('New Value');
  });

  it(`should set formcontrol's formgroup value`, () => {
    component.ngOnInit();

    component.setControlValue('New Value');

    expect(component.formGroup.get('value')?.value).toEqual('New Value');
  });

  it(`should emit onInput`, () => {
    component.ngOnInit();

    spyOn(component.onInput, 'emit');

    component.input();

    expect(component.onInput.emit).toHaveBeenCalled();
  });
});
