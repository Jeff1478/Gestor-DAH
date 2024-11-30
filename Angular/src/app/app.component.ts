import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

/**
 * variable gtag usada por Google para generar analiticas 
 */

declare let gtag: (property: string, value: any, configs: any) => {};
/**
 * selector : app-root es el componente que inicia la app
 */
/**
 * templateUrl : el Html que pinta el componente en blanco
 */
/**
 * StyleUrls : estilos css (sin uso)
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /**
 * title: Titulo de la aplicación
 */
  title = 'Orígenes';
  /**
   * 
   * @param router se declara router que usa el modulo importado
   */

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-XW56BKKJ2T', {
          'page_path': event.urlAfterRedirects
        });
      }
    });
  }
  
}
