import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Showcase2Component } from './showcase2/showcase2.component';

const routes: Routes = [
  {
    path: 'challenge3',
    component: Showcase2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Challenge3RoutingModule { }
