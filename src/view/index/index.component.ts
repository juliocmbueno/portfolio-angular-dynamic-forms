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
      description: 'It is an application design framework and development platform for creating efficient and sophisticated single-page apps.',
      link: 'https://angular.io/',
      img: '/assets/svg-icons/angular.svg',
      styleClassImg: 'angular'
    },
    {
      title: 'PrimeNG',
      description: 'Over 80 Angular UI Components with top-notch quality to help you implement all your UI requirements in style.',
      link: 'https://www.primefaces.org/primeng/',
      img: '/assets/svg-icons/primeng.svg',
      styleClassImg: 'primeng'
    },
    {
      title: 'TypeScript',
      description: 'It is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      link: 'https://www.typescriptlang.org/',
      img: '/assets/svg-icons/typescript.svg',
      styleClassImg: 'typescript'
    },
    {
      title: 'Bootstrap',
      description: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.',
      link: 'https://getbootstrap.com/',
      img: '/assets/svg-icons/bootstrap.svg',
      styleClassImg: 'bootstrap'
    },
    {
      title: 'Sass',
      description: 'It is the most mature, stable, and powerful professional grade CSS extension language in the world.',
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
