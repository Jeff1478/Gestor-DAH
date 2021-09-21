import { Component, OnInit } from '@angular/core';
import { SitioService } from 'src/app/services/sitio.service';
import { Sitio } from 'src/app/models/sitio';
import { Globals } from 'src/app/services/globals';

@Component({
  selector: 'app-pag-ori',
  templateUrl: './pag-ori.component.html',
  styleUrls: ['./pag-ori.component.css'],
  providers: [SitioService]
})
export class PagOriComponent implements OnInit {

  public sitios: Sitio[] = [];
  public url: string;
  public page_title!: string;

  constructor(
    private _SitioService: SitioService
  ) {
    this.url = Globals.url
    this.page_title = 'Sitio';
   }

  ngOnInit() {

    this._SitioService.getSitios(true).subscribe(
      response => { 
        
        if(response.sitio){
          this.sitios = response.sitio;
          
        }
      },
       error => {
        console.log(error);
      }
    );
  }


}


