import { Component, OnInit, ViewChild} from '@angular/core';
import { Sitio } from '../../models/sitio';
import { SitioService } from 'src/app/services/sitio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pag-lite-sitios',
  templateUrl: './pag-lite-sitios.component.html',
  styleUrls: ['./pag-lite-sitios.component.css'],
  providers : [SitioService]
})
export class PagLiteSitiosComponent implements OnInit { 

  // dataSource!: MatTableDataSource<any>;
  nombre_sitio!: string;
  clave_sitio!: string;
  provincia!: string;
  canton!: string;
  region!: string;
  public sitios: Sitio[] = [];
  

  constructor(
    private _sitioService: SitioService,
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog
  ) { }

  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['_id', 'nombre_sitio', 'clave_sitio', 'provincia', 'canton', 'distrito', 'actions'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;

  ngOnInit() {
    
    this._route.params.subscribe(params => {
    var search = params['search'];     

    if (search == '^San Jose$' || '^Alajuela$' || '^Cartago$' || '^Heredia$' || '^Guanacaste$' || '^Puntarenas$' || '^Limon$') {
      this._sitioService.search(search).subscribe(
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
    } 
      this._sitioService.searchCanton(search).subscribe(
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
          Swal.fire('Búsqueda Sitios', 'No hay Resultados en esa área!', 'error')
          this._router.navigate(['/pag-ori']);
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

  openDialog(selected:any){
    
    // const dialogRef = this.dialog.open(PagDetalleLiteSitioComponent, selected);
    this._router.navigate(['pag-ori-det/sitio', selected])
  }

  }

