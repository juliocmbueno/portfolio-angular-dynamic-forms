import {TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementViewTextComponent} from '@dynamic-forms/view/dynamic-form/create/element-view/text/dynamic-form-create-element-view-text.component';

describe('DynamicFormCreateElementViewTextComponent', () => {
  let component: DynamicFormCreateElementViewTextComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementViewTextComponent ]
    }).compileComponents();

    const fixture = TestBed.createComponent(DynamicFormCreateElementViewTextComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
