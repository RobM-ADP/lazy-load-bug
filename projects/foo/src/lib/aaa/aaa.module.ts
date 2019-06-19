import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaComponent } from './aaa.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AaaComponent
  }
]
@NgModule({
  declarations: [AaaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AaaModule { }
