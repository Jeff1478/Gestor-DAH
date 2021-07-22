import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ExporterService } from 'src/app/services/exporter';
import { Ceramic } from 'src/app/models/ceramic';
import { CeramicService } from 'src/app/services/ceramic.service';


export interface PeriodicElement {
 
  cod_mon : string;
  num_artefacto : number;
  num_caja : number;
  proyecto : string;
}


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [CeramicService]
})
export class FormularioComponent implements OnInit {
  
  
  
  displayedColumns: string[] = ['cod_mon', 'num_artefacto', 'num_caja', 'proyecto'];
  dataSource = new MatTableDataSource<Element[]>();
 

  

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
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


