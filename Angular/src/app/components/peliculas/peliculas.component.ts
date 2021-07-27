import { Component, OnInit } from '@angular/core';
import { ContextoService } from 'src/app/services/contexto.service';
import { Contexto } from 'src/app/models/contexto';
import { GlobalC } from 'src/app/services/globalc';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [ContextoService]
})
export class PeliculasComponent implements OnInit {

  public contextos: Contexto[] = [];
  public url: string;
  public page_title!: string;

  constructor(
    private _contextoService: ContextoService
  ) {
    this.url = GlobalC.url
    this.page_title = 'Contexto';
    
  }

  ngOnInit() {

    this._contextoService.getContextos().subscribe(
      response => { 
        
        if(response.contexto){
          this.contextos = response.contexto;
          
        }
      },
       error => {
        console.log(error);
      }
    );
  }


}

