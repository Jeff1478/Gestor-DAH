import { Component, OnInit } from '@angular/core';
import { SitioService } from 'src/app/services/sitio.service';
import { Sitio } from 'src/app/models/sitio';
import { Globals } from 'src/app/services/globals';
import { ChartType } from 'angular-google-charts';


@Component({
  selector: 'app-pag-ori',
  templateUrl: './pag-ori.component.html',
  styleUrls: ['./pag-ori.component.css'],
  providers: [SitioService]
})
export class PagOriComponent implements OnInit {

  public sitios: Sitio[] = [];
  public url: string;
  public page_title!: string;
  
  chartData = {
    type: ChartType.LineChart,
    data: [
      ['Antes de 1970', 99],
      ['1970-1980', 547],
      ['1980-1990', 1055],
      ['1990-2000', 956],
      ['2000-2010', 849],
      ['2010-2021', 1507]
 ],
 columnNames: ["Años", "Monumentos"],
 options: {
 hAxis: {
       title: 'Años'
    },
    vAxis:{
       title: 'Total'
    },
 },
 width: 1000,
 height: 400
};
  
  
  myType = ChartType.PieChart;
  mytitle = "Distribución de Monumentos por Provincia"
  myData = [
    ['San José', 587],
    ['Alajuela', 561],
    ['Cartago', 519],
    ['Heredia', 195],
    ['Guanacaste', 1208],
    ['Puntarenas', 1627],
    ['Limón', 298]
  ];

  constructor(
    private _SitioService: SitioService
    
  ) {
    this.url = Globals.url
    this.page_title = 'Sitio';
    
   }

  ngOnInit() {

    this._SitioService.getSitios(true).subscribe(
      response => { 
        if(response.sitio){
          this.sitios = response.sitio;
        }
      },
       error => {
        console.log(error);
      }
    );


   



  }


}


