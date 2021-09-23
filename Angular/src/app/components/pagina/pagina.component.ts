import { Component, OnInit } from '@angular/core';
import { CeramicService } from 'src/app/services/ceramic.service';
import { Ceramic } from 'src/app/models/ceramic';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
  providers: [CeramicService]
})
export class PaginaComponent implements OnInit {

  public ceramics: Ceramic[] = [];
  public url: string;

  constructor(
    private _ceramicService: CeramicService
  ) {
    this.url = Global.url
  }

  ngOnInit() {
    
    this._ceramicService.getCeramics(true).subscribe(
      response => { 
        
        if(response.ceramics){
          this.ceramics = response.ceramics;
        }
      },
       error => {
        console.log(error);
      }
    );
  }

}
