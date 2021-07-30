import { Component, OnInit, NgModule } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ExporterService } from 'src/app/services/exporter';
import { Ceramic } from 'src/app/models/ceramic';
import { CeramicService } from 'src/app/services/ceramic.service';
import {PageEvent} from '@angular/material/paginator';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [CeramicService]
})


export class FormularioComponent implements OnInit {
  
  displayedColumns: string[] = ['cod_mon','num_artefacto','proyecto','pro_year','etiqueta','contexto','ubicacion','investigador'];
  dataSource!: MatTableDataSource<any>;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor( 
    private excelService: ExporterService, 
    private _ceramicService: CeramicService
    ) { 
    
    }

  ngOnInit(){

    this._ceramicService.getCeramics().subscribe(
      response => { 
        
        if(response.ceramics){
          
          this.dataSource = new MatTableDataSource(response.ceramics);
          
        }
      },
       error => {
        console.log(error);
      }
    );

  }

 
  

  exportAsXLSX(): void{
    this.excelService.exportToExcel(this.dataSource.data, 'my_export');
  }

  exportAsXLSXFiltered(): void{
    this.excelService.exportToExcel(this.dataSource.filteredData, 'my_export');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}


