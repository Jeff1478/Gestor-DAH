import { Component, OnInit } from '@angular/core';
import { CeramicService } from 'src/app/services/ceramic.service';
import { Ceramic } from 'src/app/models/ceramic';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CeramicService, AuthService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public ceramics: Ceramic[] = [];
  public usuario: string;
  public separado: string;
  
 

  constructor(
    private _ceramicService : CeramicService,
    private authService : AuthService
  ) {
    this.title = '';
    this.usuario = '';
    this.separado = '';
   }



  ngOnInit() {

    
    this.authService.search(localStorage.getItem('email'))
      .subscribe(
        res => {
          if(res.usuarios){
            this.usuario = res.usuarios;
            this.title = JSON.stringify(this.usuario, ['nombre'])
            this.separado = this.title.substring(12,25)
            
          }
        },
        err => {console.log(err)
        });  
  

    
    
   

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
