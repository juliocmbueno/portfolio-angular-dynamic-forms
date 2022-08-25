import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputTextareaEditableOnClickComponent} from './input-textarea-editable-on-click.component';
import {FormBuilder} from "@angular/forms";

describe('InputTextareaEditableOnClickComponent', () => {
  let component: InputTextareaEditableOnClickComponent;
  let fixture: ComponentFixture<InputTextareaEditableOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ FormBuilder ],
      declarations: [ InputTextareaEditableOnClickComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextareaEditableOnClickComponent);
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

  it('should be editable true after edit', () => {
    component.ngOnInit();

    component.edit();

    expect(component.editable).toBeTrue();
  });
});
