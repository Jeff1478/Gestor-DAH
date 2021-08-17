import { Component, OnInit } from '@angular/core';
import { MetalicoService } from 'src/app/services/metalico.service';
import { Metalico } from 'src/app/models/metalico';
import { GlobalM} from 'src/app/services/globalmet';

@Component({
  selector: 'app-pag-met',
  templateUrl: './pag-met.component.html',
  styleUrls: ['./pag-met.component.css'],
  providers: [MetalicoService]
})



export class PagMetComponent implements OnInit {

  public metalicos: Metalico[] = [];
  public url: string;
  public page_title!: string;

  constructor(
    private _MetalicoService: MetalicoService
  ) {
    this.url = GlobalM.url
    this.page_title = 'Metalico';
   }


  ngOnInit() {

    this._MetalicoService.getMetalicos(true).subscribe(
      response => { 
        
        if(response.metalico){
          this.metalicos = response.metalico;
          
        }
      },
       error => {
        console.log(error);
      }
    );
  }


}


