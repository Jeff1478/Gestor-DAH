import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ExporterService } from 'src/app/services/exporter';
import { MetalicoService } from 'src/app/services/metalico.service';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-metal-excel',
  templateUrl: './metal-excel.component.html',
  styleUrls: ['./metal-excel.component.css'],
  providers: [MetalicoService]
})



export class MetalExcelComponent implements AfterViewInit {

 
  // displayedColumns: string[] = ['cod_mon','num_artefacto','proyecto','pro_year','etiqueta','contexto','ubicacion','investigador'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('group') toggle!: MatButtonToggle;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor( 
    private excelService: ExporterService, 
    private _metalicoService: MetalicoService
    ) { 
    
    }

  ngOnInit(){

    this._metalicoService.getMetalicos().subscribe(
      response => { 
        
        if(response.metalico){
          
          this.dataSource = new MatTableDataSource(response.metalico);
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



