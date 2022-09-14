import {Component, OnInit} from '@angular/core';
import {AppNavService} from '@dynamic-forms/app/app-nav/app-nav.service';
import {AppNavItems} from '@dynamic-forms/app/app-nav/app-nav-item';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  technologies: IndexComponentTechnology[] = [
    {
      title: 'Angular',
      description: 'index.angularDescription',
      link: 'https://angular.io/',
      img: '/assets/svg-icons/angular.svg',
      styleClassImg: 'angular'
    },
    {
      title: 'PrimeNG',
      description: 'index.primeNGDescription',
      link: 'https://www.primefaces.org/primeng/',
      img: '/assets/svg-icons/primeng.svg',
      styleClassImg: 'primeng'
    },
    {
      title: 'TypeScript',
      description: 'index.typeScriptDescription',
      link: 'https://www.typescriptlang.org/',
      img: '/assets/svg-icons/typescript.svg',
      styleClassImg: 'typescript'
    },
    {
      title: 'Bootstrap',
      description: 'index.BootstrapDescription',
      link: 'https://getbootstrap.com/',
      img: '/assets/svg-icons/bootstrap.svg',
      styleClassImg: 'bootstrap'
    },
    {
      title: 'Sass',
      description: 'index.sassDescription',
      link: 'https://sass-lang.com/',
      img: '/assets/svg-icons/sass.svg',
      styleClassImg: 'sass'
    }
  ];

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.appNavService.setActivatedIten(AppNavItems['HOME']);
  }

}

export interface IndexComponentTechnology{
  title: string,
  description: string,
  link: string,
  img: string,
  styleClassImg: string
}
