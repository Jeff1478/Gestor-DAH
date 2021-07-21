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

/* const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */

// const ELEMENT_DATA : Ceramic[] = [];

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [CeramicService]
})
export class FormularioComponent implements OnInit {
  
  public ELEMENT_DATA: Ceramic[] = [];
  
  displayedColumns: string[] = ['cod_mon', 'num_artefacto', 'num_caja', 'proyecto'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 

  

  constructor( 
    private excelService: ExporterService, 
    private _ceramicService: CeramicService
    ) { }

  ngOnInit(){

    this._ceramicService.getCeramics().subscribe(
      response => { 
        
        if(response.ceramics){
          
          this.ELEMENT_DATA = response.ceramics;
          console.log(this.ELEMENT_DATA);
        }
      },
       error => {
        console.log(error);
      }
    );
   console.log(this.dataSource);
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


