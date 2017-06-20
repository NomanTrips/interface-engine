import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Channel } from './channel';

@Injectable()
export class ChannelService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private channelsUrl = 'api/channels';  // URL to web api

  constructor(private http: Http) { }

  getChannels(): Promise<Channel[]> {
    return this.http.get(this.channelsUrl)
               .toPromise()
               .then(response => response.json().data as Channel[])
               .catch(this.handleError);
  }


  getChannel(id: number): Promise<Channel> {
    const url = `${this.channelsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Channel)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.channelsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Channel> {
    return this.http
      .post(this.channelsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Channel)
      .catch(this.handleError);
  }

  update(channel: Channel): Promise<Channel> {
    const url = `${this.channelsUrl}/${channel.id}`;
    return this.http
      .put(url, JSON.stringify(channel), {headers: this.headers})
      .toPromise()
      .then(() => channel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

