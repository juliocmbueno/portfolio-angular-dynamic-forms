import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ThemeLightDarkSelectorComponent} from './theme-light-dark-selector.component';

describe('ThemeLightDarkSelectorComponent', () => {
  let component: ThemeLightDarkSelectorComponent;
  let fixture: ComponentFixture<ThemeLightDarkSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeLightDarkSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeLightDarkSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
