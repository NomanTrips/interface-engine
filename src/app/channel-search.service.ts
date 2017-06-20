import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Channel }           from './channel';

@Injectable()
export class ChannelSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Channel[]> {
    return this.http
               .get(`app/channels/?name=${term}`)
               .map(response => response.json().data as Channel[]);
  }
}
