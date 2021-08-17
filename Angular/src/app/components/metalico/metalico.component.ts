import { Component, OnInit, Input } from '@angular/core';
import { Metalico } from 'src/app/models/metalico';
import { GlobalM } from 'src/app/services/globalmet';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { MetalicoService } from 'src/app/services/metalico.service';

@Component({
  selector: 'app-metalico',
  templateUrl: './metalico.component.html',
  styleUrls: ['./metalico.component.css'],
  providers: [MetalicoService]
})



export class MetalicoComponent implements OnInit {

  @Input()
  metalicos: Metalico[] = [];
  public url: string;

  constructor(
    private _metalicoService: MetalicoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.url = GlobalM.url
   
   }

  ngOnInit(){
    
    
    
     
  }

}

