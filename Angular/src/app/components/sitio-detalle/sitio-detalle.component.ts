import { Component, OnInit } from '@angular/core';
import { SitioService } from 'src/app/services/sitio.service';
import { Sitio } from 'src/app/models/sitio';
import { Globals } from 'src/app/services/globals';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonModule } from '@angular/common'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sitio-detalle',
  templateUrl: './sitio-detalle.component.html',
  styleUrls: ['./sitio-detalle.component.css'],
  providers: [SitioService,AuthService],
})
export class SitioDetalleComponent implements OnInit {
  public sitio!: Sitio;
  public url: string;
  public page_title!: string;
  public cadena!: string;
  public cadena_result!: string[];
  public separador = ';';
  public separadorUna = '';
  public administrador!: boolean;
  public registrado!: boolean;
  public usuario!: any;
  public title!: string;
  public tama!: number;
  public cadenalinks!: string[];
  public mostrar!: boolean;
  public filtered!: String;

  constructor(
    private _sitioService: SitioService,
    private _route: ActivatedRoute,
    private _router: Router,
    public authService : AuthService,
    private sanitizer: DomSanitizer
  ) {
    this.url = Globals.url;
    this.page_title = 'Sitio';
    this.mostrar = false;
  }

  ngOnInit() {

    this.authService.search(localStorage.getItem('email'))
    .subscribe(
      res => {
        if(res.usuarios){
          console.log(res.usuarios)
          this.usuario = res.usuarios;
          this.title = JSON.stringify(this.usuario, ['email'])
        }

        if (this.title == '[{"email":"jbrenes@museocostarica.go.cr"}]' || this.title =='[{"email":"jtapia@museocostarica.go.cr"}]'){
          this.administrador = true;
         
        } else if (this.title == '[{"email":"bm@kraken.com"}]'){
        this.registrado = true;
      } else{
        this.administrador = false;
      }},
      err => {console.log(err) 
      });  


    this._route.params.subscribe((params) => {
      let id = params['id'];

      this._sitioService.getSitio(id).subscribe(
        (response) => {
          if (response.sitio) {
            this.sitio = response.sitio;
            
             
            this.cadena = this.sitio.links;
            //console.log(this.cadena)
            this.tama = this.cadena?.length;
            
            if(this.tama > 0){
              this.dividirCadena(this.cadena, this.separador);
             
              this.mostrar = true
            }

          } else {
            this._router.navigate(['/pag-ori/sitio']);
          }

        },
        (error) => {
          console.log(error);
          this._router.navigate(['/home']);
        }
        
      );
    });

   

    
  }

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
 

resultado!: string[];
datos!: string;

dividirCadena(cadenaADividir: any, separador: any) {
  var arrayDeCadenas = cadenaADividir.split(separador);
  for (var i = 1; i < arrayDeCadenas.length; i++) {
    this.datos = this.datos + '#' + arrayDeCadenas[i];
  }
  this.resultado = this.datos?.split('#');
  
}

 
}
  

