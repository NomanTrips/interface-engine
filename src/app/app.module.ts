import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdSidenavModule, MdCardModule, MdListModule, MdTabsModule, MdSelectModule, MdInputModule} from '@angular/material';
import { MdDataTableModule } from 'ng2-md-datatable';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { ChannelsComponent }      from './channels.component';
import { ChannelDetailComponent }  from './channel-detail.component';
import { ChannelService }          from './channel.service';
import { ChannelSearchComponent }  from './channel-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule,
    MdDataTableModule,
    MdTabsModule,
    MdSelectModule,
    MdInputModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ChannelDetailComponent,
    ChannelsComponent,
    ChannelSearchComponent
  ],
  providers: [ ChannelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
