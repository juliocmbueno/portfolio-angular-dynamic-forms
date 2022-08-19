import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementViewCheckboxComponent} from '@dynamic-forms/view/dynamic-form/create/element-view/checkbox/dynamic-form-create-element-view-checkbox.component';

describe('DynamicFormCreateElementViewCheckboxComponent', () => {
  let component: DynamicFormCreateElementViewCheckboxComponent;
  let fixture: ComponentFixture<DynamicFormCreateElementViewCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementViewCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreateElementViewCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
