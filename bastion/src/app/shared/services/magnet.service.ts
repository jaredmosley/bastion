import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {
  RARBGResponse as Response,
  RARBGResult as Result,
  RARBGToken as Token
} from '../models/result.model';

@Injectable()
export class MagnetService {
  private url = 'http://localhost:1337/torrentapi.org/pubapi_v2.php';
  public results$: Observable<Result[]>;

  private session = {
    token: '',
    timestamp: 0
  };

  constructor(
    private http: HttpClient
  ) {
    this.updateSession();
  }

  initDownload(id: string, name: string): void {
    const torrent = {
      magnet_link: '',
      filename: ''
    };

    this.search(id)
    .subscribe(
      results => {
        console.log('torrent results', results.torrent_results);
        const result = this.reduce(results.torrent_results);
        torrent.filename = name;
        torrent.magnet_link = result.download;
        console.log('final torrent', torrent);
        this.download(torrent);
      }
    );
  }


  private reduce(results: Result[]): Result {
    const orderedQualityPairs = [['x264', '1080'], ['h264', '1080'], ['x264', '720'], ['h264', '720']];
    function qualityFilter(array: Result[], format: string, resolution: string): Result[] {
      return array.filter(
        item => {
          const info = item.category.split('/');
          return (info[1] === format && info[2] === resolution);
        }
      );
    }

    for (const pair of orderedQualityPairs) {
      const result = qualityFilter(results, pair[0], pair[1])[0];
      if (result) { return result; }
    }
    console.log('couldnt find one');
  }

  private download(torrent: any): void {
    // send request to backend
  }

  private search(id: string): Observable<Response> {
    this.updateSession();

    console.log('id', id);

    const params = new HttpParams()
    .set('mode', 'search')
    .set('search_imdb', id)
    .set('token', this.session.token);

    return this.http.get<Response>(this.url, {params: params});
  }

  private updateSession(): void {
    if (!this.tokenIsValid()) {
      const params = new HttpParams()
      .set('get_token', 'get_token');
      this.http.get<Token>(this.url, {params: params})
      .subscribe(response => this.session.token = response.token);
    }
  }

  private tokenIsValid(): boolean {
    return (Date.now() - this.session.timestamp) < 600;
  }

  private buildUrl(term: string): string {
    if (!term.trim()) { console.log('empty search'); }
    function clean(dirty: string) { return dirty.replace(/ /g, '+'); }
    return this.url.concat('s='.concat(clean(term)));
  }

}
