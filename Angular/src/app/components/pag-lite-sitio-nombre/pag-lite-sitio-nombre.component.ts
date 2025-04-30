import { Component, OnInit, ViewChild} from '@angular/core';
import { Sitio } from '../../models/sitio';
import { SitioService } from 'src/app/services/sitio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/services/auth.service';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pag-lite-sitio-nombre',
  templateUrl: './pag-lite-sitio-nombre.component.html',
  styleUrls: ['./pag-lite-sitio-nombre.component.css'],
  providers : [SitioService,AuthService,RegistroService]
})
export class PagLiteSitioNombreComponent implements OnInit {

  nombre_sitio!: string;
  clave_sitio!: string;
  provincia!: string;
  canton!: string;
  region!: string;
  datoUsuario!:any;
  public administrador!: boolean;
  public registrado!: boolean;
  public usuario!: any;
  public title!: string;
  public user!: any;
  public acceso!: string;
  public arqueo: boolean;
  public sitios: Sitio[] = [];

  constructor(
    private _sitioService: SitioService,
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog,
    public authService : AuthService,
    public _registroService: RegistroService
  ) {
    this.arqueo = false;
    this.user = '';
   }

  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['_id', 'nombre_sitio', 'clave_sitio', 'provincia', 'canton', 'distrito', 'actions'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;


  ngOnInit() {
    this.authService.search(localStorage.getItem('email'))
    .subscribe(
      res => {
        if(res.usuarios){
          console.log(res.usuarios)
          this.usuario = res.usuarios;
          this.title = JSON.stringify(this.usuario, ['email'])
          this.searchPerfil(localStorage.getItem('email'));
        }

        if (this.title == '[{"email":"jbrenes@museocostarica.go.cr"}]' || this.title =='[{"email":"jeffreytapia@gmail.com"}]'){
          this.administrador = true;
          this.registrado = true;
        } else if (this.title == '[{"email":"bm@kraken.com"}]'){
        this.administrador = true;
       
      } else{
        this.administrador = false;
      }},

      err => {console.log(err)
       
      });  


    this._route.params.subscribe(params => {
      var search = params['search'];
      this._sitioService.searchNombre(search).subscribe(
        response => {
         if(response.sitio){
           this.sitios = response.sitio;
           this.listData = new MatTableDataSource(response.sitio);
           this.listData.sort = this.sort;
           this.listData.paginator = this.paginator;
         }else{
          this.sitios = [];
         }
        },
        error => {
          console.log(error);
          this.sitios = [];
        }
      );
    });

  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  searchPerfil(searstring:any){
    this._registroService.search(searstring).subscribe(
      response => {
       if(response.registro){

        this.user = response.registro
        console.log(this.user)
        this.acceso = JSON.stringify(this.user, ['acceso'])

           if(this.acceso == '[{"acceso":true}]'){
            this.arqueo = true;
          } 
         
        
      }},

      err => {
        console.log(err);
      }
    );
  }


  openDialog(selected:any){
    let url = '';
    if (this.arqueo) {
      url = `/pag-ori/sitio/${selected}`;
    } else {
      url = `/pag-ori-det/sitio/${selected}`;
    }
    window.open(url, '_blank');
    // const dialogRef = this.dialog.open(PagDetalleLiteSitioComponent, selected);
    
  }

}
