import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie-list/movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieComponent
  ],
  exports: [
    MovieListComponent,
    MovieComponent
  ]
})
export class MoviesModule { }
