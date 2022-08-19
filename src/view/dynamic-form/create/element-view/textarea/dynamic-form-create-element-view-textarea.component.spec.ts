import {TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementViewTextareaComponent} from '@dynamic-forms/view/dynamic-form/create/element-view/textarea/dynamic-form-create-element-view-textarea.component';

describe('DynamicFormCreateElementViewTextareaComponent', () => {
  let component: DynamicFormCreateElementViewTextareaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementViewTextareaComponent ]
    })
    .compileComponents();

    const fixture = TestBed.createComponent(DynamicFormCreateElementViewTextareaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
