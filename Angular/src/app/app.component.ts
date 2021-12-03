import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';



declare let gtag: (property: string, value: any, configs: any) => {};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Colecciones DAH';

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-S9PXJXHKF3', {
          'page_path': event.urlAfterRedirects
        });
      }
    });
  }
  
}
