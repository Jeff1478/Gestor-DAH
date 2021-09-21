import { Component, OnInit, Input } from '@angular/core';
import { Sitio } from 'src/app/models/sitio';
import { Globals } from 'src/app/services/globals';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { SitioService } from 'src/app/services/sitio.service';

@Component({
  selector: 'app-sitio',
  templateUrl: './sitio.component.html',
  styleUrls: ['./sitio.component.css'],
  providers: [SitioService]
})

export class SitioComponent implements OnInit {

  @Input()
  sitios: Sitio[] = [];
  public url: string;

  constructor(
    private _metalicoService: SitioService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.url = Globals.url
   
   }

  ngOnInit(){
    
  }

}


