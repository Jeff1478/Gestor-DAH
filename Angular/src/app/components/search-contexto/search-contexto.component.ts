import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Contexto } from '../../models/contexto';
import { ContextoService } from 'src/app/services/contexto.service';

@Component({
  selector: 'app-search-contexto',
  templateUrl: './search-contexto.component.html',
  styleUrls: ['./search-contexto.component.css'],
  providers : [ContextoService]
})
export class SearchContextoComponent implements OnInit {

  public contextos: Contexto[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contextoService: ContextoService
  ) { 
    
  }


  ngOnInit(){
    this._route.params.subscribe(params => {
      var search = params['search'];
      
      this._contextoService.search(search).subscribe( 
        response => {
         if(response.contextos){
           this.contextos = response.contextos;
          //  this._router.navigate(['/pagina']);
         }else{
          this.contextos = [];
         }
        },
        error => {
          console.log(error);
          this.contextos = [];
          
        }
      );
    });
  }

}
