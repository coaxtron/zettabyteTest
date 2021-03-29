import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Showcase3Component } from './showcase3/showcase3.component';

const routes: Routes = [
  {
    path: 'challenge4',
    component: Showcase3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Challenge4RoutingModule { }
