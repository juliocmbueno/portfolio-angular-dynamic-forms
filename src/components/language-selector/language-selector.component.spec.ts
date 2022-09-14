import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageSelectorComponent} from './language-selector.component';
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";
import {Languages} from "@dynamic-forms/domain/language";

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoModule],
      providers: [TranslocoService],
      declarations: [ LanguageSelectorComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.selectedLanguage).toBe(Languages.en);
    expect(component.languages.length).toBe(Object.keys(Languages).length);
  });

  it('should update language', () => {
    const translocoService:TranslocoService = component['translocoService'];

    spyOn(translocoService, 'setActiveLang');

    component.updateLanguage(Languages.en);

    expect(translocoService.setActiveLang).toHaveBeenCalledWith(Languages.en.id);
  });
});
