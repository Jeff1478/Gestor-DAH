import { Component, OnInit } from '@angular/core';
import { CeramicService } from 'src/app/services/ceramic.service';
import { Ceramic } from 'src/app/models/ceramic';
import {AuthService} from 'src/app/services/auth.service';
import { DatePipe, NumberFormatStyle } from '@angular/common';

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
  public today!: number;
  
 

  constructor(
    private _ceramicService : CeramicService,
    private authService : AuthService
  ) {
    this.title = '';
    this.usuario = '';
    this.separado = '';
   }



  ngOnInit() {

    this.today = Date.now();
    
    this.authService.search(localStorage.getItem('email'))
      .subscribe(
        res => {
          if(res.usuarios){
           
            this.usuario = res.usuarios;
            this.title = JSON.stringify(this.usuario, ['email'])
            // this.separado = this.title
            this.separado = this.title.substring(11,50)
            
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
