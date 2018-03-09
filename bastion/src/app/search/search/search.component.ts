import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

import { SearchService } from '../../shared/services/search.service';

import {
  OMDBResponse as Response,
  OMDBResult as Result
} from '../../shared/models/result.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searcher: SearchService) { }

  private results$: Observable<Result[]>;

  ngOnInit() {
  }

  search(term: string): void {
    if (term) {
      this.searcher.search(term);
    }
  }
}
