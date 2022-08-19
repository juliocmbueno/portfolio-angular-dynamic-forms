import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementViewRadioComponent} from '@dynamic-forms/view/dynamic-form/create/element-view/radio/dynamic-form-create-element-view-radio.component';

describe('DynamicFormCreateElementViewRaioComponent', () => {
  let component: DynamicFormCreateElementViewRadioComponent;
  let fixture: ComponentFixture<DynamicFormCreateElementViewRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementViewRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreateElementViewRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
