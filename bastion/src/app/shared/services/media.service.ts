import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Movie } from '../models/movie.model';

@Injectable()
export class MediaService {

  private url = 'testurl';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }
}
