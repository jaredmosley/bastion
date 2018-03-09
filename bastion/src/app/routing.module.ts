import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'search',
  },
  {
    path: 'search',
    loadChildren: 'app/search/search.module#SearchModule'
  },
  {
    path: 'movies',
    loadChildren: 'app/movies/movies.module#MoviesModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
