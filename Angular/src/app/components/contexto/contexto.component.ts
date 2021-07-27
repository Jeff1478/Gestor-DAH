import { Component, OnInit, Input } from '@angular/core';
import { Contexto } from 'src/app/models/contexto';
import { GlobalC } from 'src/app/services/globalc';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { ContextoService } from 'src/app/services/contexto.service';



@Component({
  selector: 'app-contexto',
  templateUrl: './contexto.component.html',
  styleUrls: ['./contexto.component.css'],
  providers: [ContextoService]
})
export class ContextoComponent implements OnInit {

  @Input()
  contextos: Contexto[] = [];
  public url: string;

  constructor(
    private _contextoService: ContextoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.url = GlobalC.url
   
   }

  ngOnInit(){
    
    
    
     
  }

}

