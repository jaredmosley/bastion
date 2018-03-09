import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {
  OMDBResponse as Response,
  OMDBResult as Result
} from '../models/result.model';

@Injectable()
export class SearchService {

  private url = 'http://www.omdbapi.com/?apikey=c5909197&';
  public results$: Observable<Result[]>;

  constructor(
    private http: HttpClient
  ) { }

  private buildUrl(term: string): string {
    if (!term.trim()) { console.log('empty search'); }
    function clean(dirty: string) { return dirty.replace(/ /g, '+'); }
    return this.url.concat('s='.concat(clean(term)));
  }

  search(term: string): void {
    const url: string = this.buildUrl(term);
    this.http.get<Response>(url)
    .subscribe(res => {
      this.results$ = of(res.Search);
    });
  }

}
