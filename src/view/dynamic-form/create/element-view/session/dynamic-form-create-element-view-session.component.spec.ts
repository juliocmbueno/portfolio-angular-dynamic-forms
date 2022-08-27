import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicFormCreateElementViewSessionComponent} from './dynamic-form-create-element-view-session.component';
import {DynamicFormElement, DynamicFormTypes} from "@dynamic-forms/domain/dynamic-form-element";

describe('DynamicFormCreateElementViewSessionComponent', () => {
  let component: DynamicFormCreateElementViewSessionComponent;
  let fixture: ComponentFixture<DynamicFormCreateElementViewSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateElementViewSessionComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreateElementViewSessionComponent);
    component = fixture.componentInstance;
    component.element = new DynamicFormElement('', DynamicFormTypes.TEXT);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
