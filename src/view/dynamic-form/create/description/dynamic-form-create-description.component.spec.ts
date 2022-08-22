import {DynamicFormCreateDescriptionComponent} from "@dynamic-forms/view/dynamic-form/create/description/dynamic-form-create-description.component";
import {TestBed} from "@angular/core/testing";

describe('DynamicFormCreateDescriptionComponent', () => {
  let component: DynamicFormCreateDescriptionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCreateDescriptionComponent ]
    }).compileComponents();

    const fixture = TestBed.createComponent(DynamicFormCreateDescriptionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
