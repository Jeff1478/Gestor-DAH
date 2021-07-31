import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ExporterService } from 'src/app/services/exporter';
import { Ceramic } from 'src/app/models/ceramic';
import { CeramicService } from 'src/app/services/ceramic.service';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [CeramicService]
})


export class FormularioComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['cod_mon','num_artefacto','proyecto','pro_year','etiqueta','contexto','ubicacion','investigador'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


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
          this.dataSource.paginator = this.paginator;
          
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


