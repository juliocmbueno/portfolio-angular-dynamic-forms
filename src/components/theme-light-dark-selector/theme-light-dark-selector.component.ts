import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-theme-light-dark-selector',
  templateUrl: './theme-light-dark-selector.component.html',
  styleUrls: ['./theme-light-dark-selector.component.scss']
})
export class ThemeLightDarkSelectorComponent implements OnInit {

  selectedTheme!:Theme;

  constructor() { }

  ngOnInit(): void {
    const selectedTheme:Theme = <Theme>localStorage.getItem('selected-theme') || "light";
    this.setTheme(selectedTheme);
  }

  public toggleTheme():void{
    this.setTheme(this.selectedTheme == "light" ? "dark" : "light");
  }

  private setTheme(theme:Theme):void{
    this.selectedTheme = theme;
    localStorage.setItem('selected-theme', theme);
    document.querySelector('body')?.setAttribute('theme', theme);
  }

}

export type Theme = 'dark'|'light';
