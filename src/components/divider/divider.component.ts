import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-divider',
  styleUrls: ['./divider.component.scss'],
  template: `
    <div class="row justify-content-center divider-container">
      <div class="col-auto" [style]="{width: width}"></div>
    </div>
  `
})
export class DividerComponent {

  @Input() width:string = '50%';

  constructor() { }

}
