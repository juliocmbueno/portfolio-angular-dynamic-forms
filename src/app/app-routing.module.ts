import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../view/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'dynamic-form',
    loadChildren: () => import('../view/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
