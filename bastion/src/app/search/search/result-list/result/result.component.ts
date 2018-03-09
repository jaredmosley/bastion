import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { OMDBResult as Result } from '../../../../shared/models/result.model';
import { MagnetService } from '../../../../shared/services/magnet.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() rawResult: Result;
  result: {
    id: string,
    image: string,
    title: string,
    year: string
  };

  constructor(
    private magnetService: MagnetService
  ) { }

  ngOnInit() {
    this.result = {
      image: this.rawResult.Poster,
      title: this.rawResult.Title,
      year: this.rawResult.Year,
      id: this.rawResult.imdbID
    };
  }

  downloadClick(id: string): void {
    const name = this.result.title.concat(` (${this.result.year})`);
    this.magnetService.initDownload(id, name);
  }
}
