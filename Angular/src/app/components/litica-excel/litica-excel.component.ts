import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ExporterService } from 'src/app/services/exporter';
import { LiticoService } from 'src/app/services/litico.service';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-litica-excel',
  templateUrl: './litica-excel.component.html',
  styleUrls: ['./litica-excel.component.css'],
  providers: [LiticoService]
})


export class LiticaExcelComponent implements AfterViewInit {

 
  // displayedColumns: string[] = ['cod_mon','num_artefacto','proyecto','pro_year','etiqueta','contexto','ubicacion','investigador'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('group') toggle!: MatButtonToggle;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor( 
    private excelService: ExporterService, 
    private _liticoService: LiticoService
    ) { 
    
    }

  ngOnInit(){

    this._liticoService.getLiticos().subscribe(
      response => { 
        
        if(response.litico){
          
          this.dataSource = new MatTableDataSource(response.litico);
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



