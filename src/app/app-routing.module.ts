import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'aaa',
    loadChildren: () => import('./aaa-wrapper.module').then(m => m.AaaWrapperModule)
  },
  {
    path: 'bbb',
    loadChildren: () => import('./bbb-wrapper.module').then(m => m.BbbWrapperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
