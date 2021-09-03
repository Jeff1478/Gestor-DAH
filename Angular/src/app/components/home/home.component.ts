import { Component, OnInit } from '@angular/core';
import { CeramicService } from 'src/app/services/ceramic.service';
import { Ceramic } from 'src/app/models/ceramic';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CeramicService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public ceramics: Ceramic[] = [];
  public usuario: any;

  constructor(
    private _ceramicService : CeramicService
  ) {
    this.title = 'Articulo del Mes';
   }

  ngOnInit() {
    this.usuario = localStorage.getItem('user');
    console.log(this.usuario)
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
