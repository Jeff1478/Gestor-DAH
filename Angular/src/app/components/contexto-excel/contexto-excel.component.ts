import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ExporterService } from 'src/app/services/exporter';
import { ContextoService } from 'src/app/services/contexto.service';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-contexto-excel',
  templateUrl: './contexto-excel.component.html',
  styleUrls: ['./contexto-excel.component.css'],
  providers: [ContextoService]
})
export class ContextoExcelComponent implements AfterViewInit {

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('group') toggle!: MatButtonToggle;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(
    private excelService: ExporterService, 
    private _contextoService: ContextoService
  ) { }

  ngOnInit(){

    this._contextoService.getContextos().subscribe(
      response => { 
        
        if(response.contexto){
          
          this.dataSource = new MatTableDataSource(response.contexto);
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
