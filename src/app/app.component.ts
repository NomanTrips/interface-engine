import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
 <md-sidenav-container fullscreen [class.m2app-dark]="true">
    <md-sidenav mode="side" opened="false">Drawer content</md-sidenav>

  <md-toolbar color="primary">
    <button class="app-icon-button" (click)="sidenav.toggle()">
      <i class="material-icons app-toolbar-menu">menu</i>
    </button>

    Angular Material2 Example App

    <span class="app-toolbar-filler"></span>
    <button md-button (click)="isDarkTheme = !isDarkTheme">TOGGLE DARK THEME</button>
  </md-toolbar>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  </md-sidenav-container>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interface engine';
}
