import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
import { Sitio } from '../../models/sitio';
import { SitioService } from 'src/app/services/sitio.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-mapa-origenes',
  templateUrl: './mapa-origenes.component.html',
  styleUrls: ['./mapa-origenes.component.css'],
  providers : [SitioService]
})
export class MapaOrigenesComponent implements OnInit {



  

  public lat!: number;
  public lng!: number;
  public zoom!: number;
  public mapTypeId!: any;
  public searchString!: any;
  public searchString2!: String;
  public sitios: Sitio[] = [];

  origenes!: any [];

  constructor(
    private _sitioService: SitioService,
    private _route: ActivatedRoute
  ) { 
    this.lat = 40;
    this.lng = -3;
    this.zoom = 6;
    this.mapTypeId = 'hybrid';
   
  }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 8
    })

  }



  goSearch(){
    /* this._route.params.subscribe(params => {
      var search = params['search']; */
      
      var search = this.searchString;

    this._sitioService.search(search).subscribe( 
      response => {
       if(response.sitio){
         this.sitios = response.sitio;
  
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
}
