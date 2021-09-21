import { Component, OnInit } from '@angular/core';
import { SitioService } from 'src/app/services/sitio.service';
import { Sitio } from 'src/app/models/sitio';
import { Globals } from 'src/app/services/globals';
import { Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
  selector: 'app-sitio-detalle',
  templateUrl: './sitio-detalle.component.html',
  styleUrls: ['./sitio-detalle.component.css'],
  providers: [SitioService]
})
export class SitioDetalleComponent implements OnInit {


  public sitio!: Sitio;
  public url: string;
  public page_title!: string;

  constructor(
    private _sitioService: SitioService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.url = Globals.url
    this.page_title = 'Sitio';
   }




  ngOnInit() {

    this._route.params.subscribe(params => {
      let id = params ['id'];
    
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
