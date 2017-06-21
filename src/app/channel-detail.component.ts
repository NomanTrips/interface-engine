import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Channel }        from './channel';
import { ChannelService } from './channel.service';

@Component({
  selector: 'channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: [ './channel-detail.component.css' ]
})
export class ChannelDetailComponent implements OnInit {
  channel: Channel;

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  inboundTypes = [{text: 'SFTP'},{text: 'HTTP'}, {text: 'TCP/IP'}];

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.channelService.getChannel(+params['id']))
      .subscribe(channel => this.channel = channel);
  }

  save(): void {
    this.channelService.update(this.channel)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
