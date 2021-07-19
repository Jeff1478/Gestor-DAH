import { Component, OnInit, Input } from '@angular/core';
import { Ceramic } from 'src/app/models/ceramic';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { CeramicService } from 'src/app/services/ceramic.service';



@Component({
  selector: 'app-ceramics',
  templateUrl: './ceramics.component.html',
  styleUrls: ['./ceramics.component.css'],
  providers: [CeramicService]
})
export class CeramicsComponent implements OnInit {

  @Input()
  ceramics: Ceramic[] = [];
  public url: string;

  constructor(
    private _ceramicService: CeramicService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.url = Global.url
    
   }

  ngOnInit(){
    
    
     
  }

}
