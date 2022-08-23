import {TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementViewRadioComponent} from '@dynamic-forms/view/dynamic-form/create/element-view/radio/dynamic-form-create-element-view-radio.component';

describe('DynamicFormCreateElementViewRadioComponent', () => {
  let component: DynamicFormCreateElementViewRadioComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementViewRadioComponent ]
    }).compileComponents();

    const fixture = TestBed.createComponent(DynamicFormCreateElementViewRadioComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
