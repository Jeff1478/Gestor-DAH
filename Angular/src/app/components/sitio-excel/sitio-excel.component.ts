import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ExporterService } from 'src/app/services/exporter';
import { SitioService } from 'src/app/services/sitio.service';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-sitio-excel',
  templateUrl: './sitio-excel.component.html',
  styleUrls: ['./sitio-excel.component.css'],
  providers: [SitioService]
})



export class SitioExcelComponent implements AfterViewInit {

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('group') toggle!: MatButtonToggle;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(
    private excelService: ExporterService, 
    private _sitioService: SitioService
  ) { }

  ngOnInit(){

    this._sitioService.getSitios().subscribe(
      response => { 
        
        if(response.sitio){
          console.log(response.sitio);
          this.dataSource = new MatTableDataSource(response.sitio);
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
