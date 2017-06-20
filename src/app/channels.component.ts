import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Channel }                from './channel';
import { ChannelService }         from './channel.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './channels.component.html',
  styleUrls: [ './channels.component.css' ]
})
export class ChannelsComponent implements OnInit {
  channels: Channel[];
  selectedChannel: Channel;

  constructor(
    private channelService: ChannelService,
    private router: Router) { }

  getChannels(): void {
    this.channelService
        .getChannels()
        .then(channels => this.channels = channels);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.channelService.create(name)
      .then(channel => {
        this.channels.push(channel);
        this.selectedChannel = null;
      });
  }

  delete(channel: Channel): void {
    this.channelService
        .delete(channel.id)
        .then(() => {
          this.channels = this.channels.filter(h => h !== channel);
          if (this.selectedChannel === channel) { this.selectedChannel = null; }
        });
  }

  ngOnInit(): void {
    this.getChannels();
  }

  onSelect(channel: Channel): void {
    this.selectedChannel = channel;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedChannel.id]);
  }
}
