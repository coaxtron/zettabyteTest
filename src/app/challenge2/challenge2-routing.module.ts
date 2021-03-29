import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Showcase1Component } from './showcase1/showcase1.component';


const routes: Routes = [
  {
    path: 'challenge2',
    component: Showcase1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Challenge2RoutingModule { }
