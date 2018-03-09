import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MediaService } from '../../shared/services/media.service';

import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies$: Observable<Movie[]>;

  constructor(
    private mediaService: MediaService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.mediaService.getAll();
  }
}
