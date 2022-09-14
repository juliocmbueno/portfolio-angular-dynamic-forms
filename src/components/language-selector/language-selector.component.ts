import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";
import {SelectItem} from "primeng/api";
import {Language, LanguageID, Languages} from "@dynamic-forms/domain/language";

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {

  languages: SelectItem[] = [];
  selectedLanguage!:Language;

  constructor(
    private translocoService: TranslocoService
  ) { }

  ngOnInit(): void {
    this.initSelectedLanguage();
    this.initLanguages();
  }

  public updateLanguage(language: Language):void{
    this.translocoService.setActiveLang(language.id);
  }

  private initSelectedLanguage():void{
    this.selectedLanguage = Languages[<LanguageID>this.translocoService.getDefaultLang()];
  }

  private initLanguages():void{
    this.languages = Object
      .keys(Languages)
      .map(key => <LanguageID>key)
      .map(languageID => {
        return {
          label: Languages[languageID].label,
          value: Languages[languageID]
        }
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }
}
