import { Component, OnInit } from '@angular/core';
import { SitioService } from 'src/app/services/sitio.service';
import { Sitio } from 'src/app/models/sitio';
import { Globals } from 'src/app/services/globals';
import { ChartType } from 'angular-google-charts';
import { AuthService } from 'src/app/services/auth.service';
import { RegistroService } from 'src/app/services/registro.service';


@Component({
  selector: 'app-pag-ori',
  templateUrl: './pag-ori.component.html',
  styleUrls: ['./pag-ori.component.css'],
  providers: [SitioService,AuthService,RegistroService]
})
export class PagOriComponent implements OnInit {

  public sitios: Sitio[] = [];
  public url: string;
  public page_title!: string;
  public administrador!: boolean;
  public registrado!: boolean;
  public arqueo!: boolean;
  public usuario!: any;
  public title!: string;
  public user!: any;
  public acceso!: any;
  
  chartData = {

    myType : ChartType.PieChart,
  mytitle : "Distribución de Monumentos por Provincia",
  myData : [
    ['San José', 591],
    ['Alajuela', 567],
    ['Cartago', 520],
    ['Heredia', 201],
    ['Guanacaste', 1255],
    ['Puntarenas', 1658],
    ['Limón', 306]
  ],
  columnNames : ['Provincia', 'Cantidad'],
  options : {    
     is3D:true
  },
  width : 600,
  height : 400    
};
  
  
  

  constructor(
    private _SitioService: SitioService,
    public authService : AuthService,
    public _registroService: RegistroService
    
  ) {
    this.url = Globals.url
    this.page_title = 'Sitio';
    this.administrador = false;
    this.registrado = false;
    this.arqueo = false;
    this.usuario = '';
    this.title = '';
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

    this.authService.search(localStorage.getItem('email'))
    .subscribe(
      res => {
        if(res.usuarios){
          console.log(res.usuarios)
          this.usuario = res.usuarios;
          this.title = JSON.stringify(this.usuario, ['email'])
          this.searchPerfil(localStorage.getItem('email'));
        }

        if (this.title == '[{"email":"jbrenes@museocostarica.go.cr"}]' || this.title =='[{"email":"jtapia@museocostarica.go.cr"}]'){
          this.administrador = true;
          this.registrado = true;
        }
         /* else if (this.title == '[{"email":"jtapia@museocostarica.go.cr"}]'){
        this.administrador = true;
       
       else{
        this.administrador = false;
      } */
    },

      err => {console.log(err)
       
      });  


  }

  searchPerfil(searstring:any){
    this._registroService.search(searstring).subscribe(
      response => {
       if(response.registro){

        this.user = response.registro
        this.acceso = JSON.stringify(this.user, ['acceso'])

           if(this.acceso == '[{"acceso":true}]'){
            this.administrador = true;
          } 
        
      }},

      err => {
        console.log(err);
      }
    );
  }


}


