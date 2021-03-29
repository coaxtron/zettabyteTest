import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./challenge1/challenge1.module').then(m => m.Challenge1Module)
  },
  {
    path: '',
    loadChildren: () => import('./challenge2/challenge2.module').then(m => m.Challenge2Module)
  },
  {
    path: '',
    loadChildren: () => import('./challenge3/challenge3.module').then(m => m.Challenge3Module)
  },
  {
    path: '',
    loadChildren: () => import('./challenge4/challenge4.module').then(m => m.Challenge4Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
