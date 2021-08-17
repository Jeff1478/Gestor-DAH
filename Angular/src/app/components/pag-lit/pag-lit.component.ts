import { Component, OnInit } from '@angular/core';
import { LiticoService } from 'src/app/services/litico.service';
import { Litico } from 'src/app/models/litico';
import { Globallit } from 'src/app/services/globallit';

@Component({
  selector: 'app-pag-lit',
  templateUrl: './pag-lit.component.html',
  styleUrls: ['./pag-lit.component.css'],
  providers: [LiticoService]
})
export class PagLitComponent implements OnInit {

  public liticos: Litico[] = [];
  public url: string;
  public page_title!: string;

  constructor(
    private _liticoService: LiticoService
  ) {
    this.url = Globallit.url
    this.page_title = 'Litico';
   }


  ngOnInit() {

    this._liticoService.getLiticos(true).subscribe(
      response => { 
        
        if(response.litico){
          this.liticos = response.litico;
          
        }
      },
       error => {
        console.log(error);
      }
    );
  }


}


