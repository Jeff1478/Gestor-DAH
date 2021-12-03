import { Component, Inject, OnInit } from '@angular/core';
import { SitioService } from 'src/app/services/sitio.service';
import { Sitio } from 'src/app/models/sitio';
import { Globals } from 'src/app/services/globals';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pag-detalle-lite-sitio',
  templateUrl: './pag-detalle-lite-sitio.component.html',
  styleUrls: ['./pag-detalle-lite-sitio.component.css'],
  providers: [SitioService]
})
export class PagDetalleLiteSitioComponent implements OnInit {

  public sitio!: Sitio;
  public url: string;
  public page_title!: string;

  constructor(
   
    private _sitioService: SitioService,
    private _route:ActivatedRoute,
    private _router:Router,

    
  ) {
    this.url = Globals.url
    this.page_title = 'Sitio';
   }

  ngOnInit() {
    
    this._route.params.subscribe(params => {
      let id = params ['id'];
    console.log(params)
      this._sitioService.getSitio(id).subscribe(
        response => {
          if(response.sitio){
            
            this.sitio = response.sitio;
            console.log(this.sitio)
          }else{
            this._router.navigate(['/pag-ori/sitio']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

}
