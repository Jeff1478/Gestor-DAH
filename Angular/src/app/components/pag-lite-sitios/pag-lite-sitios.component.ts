import { Component, OnInit, ViewChild} from '@angular/core';
import { Sitio } from '../../models/sitio';
import { SitioService } from 'src/app/services/sitio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-pag-lite-sitios',
  templateUrl: './pag-lite-sitios.component.html',
  styleUrls: ['./pag-lite-sitios.component.css'],
  providers : [SitioService,AuthService,RegistroService]
})
export class PagLiteSitiosComponent implements OnInit { 

  // dataSource!: MatTableDataSource<any>;
  nombre_sitio!: string;
  clave_sitio!: string;
  
  region!: string;
  public administrador!: boolean;
  public registrado!: boolean;
  public usuario!: any;
  public title!: string;
  public arqueo: boolean;
  public user!: any;
  public acceso!: string;
  

  provincia: string = '';
  canton: string = '';
  distrito: string = '';
  sitios: any[] = [];
  

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

    const correoUsuario = localStorage.getItem('email');
    console.log("Correo del usuario:", correoUsuario);
  if (correoUsuario) {
    this.searchPerfil(correoUsuario); // 👈 Buscar perfil apenas carga
  }

    this._route.queryParams.subscribe(params => {
      // Si hay filtros en la URL, los usamos y los guardamos
      if (params['provincia'] || params['canton'] || params['distrito']) {
        const filtros = {
          provincia: params['provincia'] || '',
          canton: params['canton'] || '',
          distrito: params['distrito'] || ''
        };
  
        this.provincia = filtros.provincia;
        this.canton = filtros.canton;
        this.distrito = filtros.distrito;
  
        localStorage.setItem('filtrosBusqueda', JSON.stringify(filtros));
        this.buscarSitios(filtros);
      } else {
        // Si no hay en la URL, tratamos de leerlos del localStorage
        const guardados = localStorage.getItem('filtrosBusqueda');
        if (guardados) {
          const filtros = JSON.parse(guardados);
          this.provincia = filtros.provincia;
          this.canton = filtros.canton;
          this.distrito = filtros.distrito;
  
          // Opcionalmente podrías actualizar la URL:
          this._router.navigate([], {
            relativeTo: this._route,
            queryParams: filtros
          });
  
          this.buscarSitios(filtros);
        }
      }
    });
  }

  buscarSitios(filtros: { provincia: string, canton: string, distrito: string }) {
    this._sitioService.buscarSitios(filtros).subscribe(
      res => {
        if (res.sitio) {
          this.sitios = res.sitio;
          this.listData = new MatTableDataSource(res.sitio);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        } else {
          this.sitios = [];
        }
      },
      error => {
        console.error("Error al buscar sitios:", error);
        this.sitios = [];
      }
    );
  }
  

 /*  searchPerfil(searstring:any){
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
  } */

    searchPerfil(searstring: any) {
      this._registroService.search(searstring).subscribe(
        response => {
          if (response.registro) {
            this.user = response.registro; // ✅ ya es un objeto, no un array
            this.arqueo = !!this.user.acceso; // ✅ acceso booleano
            console.log("Acceso ampliado:", this.arqueo);
          }
        },
        err => {
          console.error("Error al obtener perfil:", err);
        }
      );
    }
  

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }



  openDialog(selected: any) {
    if (this.arqueo) {
      this._router.navigate(['/pag-ori/sitio', selected]);
    } else {
      this._router.navigate(['/pag-ori-det/sitio', selected]);
    }
  }
  

  }

