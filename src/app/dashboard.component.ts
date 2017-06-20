import { Component, OnInit } from '@angular/core';

import { Channel }        from './channel';
import { ChannelService } from './channel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  channels: Channel[] = [];

  constructor(private channelService: ChannelService, private router: Router) { }

  ngOnInit(): void {
    this.channelService.getChannels()
      .then(channels => this.channels = channels.slice(1, 5));
  }

    gotoDetail(channel: Channel): void {
    let link = ['/detail', channel.id];
    console.log(link);
    this.router.navigate(link);
  }
}
