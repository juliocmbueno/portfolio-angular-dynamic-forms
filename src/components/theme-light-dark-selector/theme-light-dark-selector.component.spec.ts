import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ThemeLightDarkSelectorComponent} from './theme-light-dark-selector.component';

describe('ThemeLightDarkSelectorComponent', () => {
  let component: ThemeLightDarkSelectorComponent;
  let fixture: ComponentFixture<ThemeLightDarkSelectorComponent>;

  beforeEach(async () => {
    localStorage.removeItem('selected-theme');

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
    expect(component.selectedTheme).toEqual('light');
  });

  it('should toggle the theme', () => {
    component.toggleTheme();
    expect(component.selectedTheme).toEqual('dark');

    component.toggleTheme();
    expect(component.selectedTheme).toEqual('light');
  });
});
