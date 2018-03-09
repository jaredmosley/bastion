import { Component, OnInit, Input } from '@angular/core';

import { ObservableMedia } from '@angular/flex-layout';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

import { OMDBResult as Result } from '../../../shared/models/result.model';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})

export class ResultListComponent implements OnInit {

  public cols: Observable<number>;

  constructor(
    private searcher: SearchService,
    private observableMedia: ObservableMedia
  ) { }

  ngOnInit() {
    const grid = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 3],
      ['lg', 4],
      ['xl', 6]
    ]);

    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });

    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return grid.get(change.mqAlias);
      })
      .startWith(start);
  }

  get(): Observable<Result[]> {
    return this.searcher.results$;
  }

}
