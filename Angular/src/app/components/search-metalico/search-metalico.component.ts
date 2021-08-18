import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Metalico } from '../../models/metalico';
import { MetalicoService } from 'src/app/services/metalico.service';

@Component({
  selector: 'app-search-metalico',
  templateUrl: './search-metalico.component.html',
  styleUrls: ['./search-metalico.component.css'],
  providers : [MetalicoService]
})




export class SearchMetalicoComponent implements OnInit {

  public metalicos: Metalico[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _metalicoService: MetalicoService
  ) { 
    
  }


  ngOnInit(){
    this._route.params.subscribe(params => {
      var search = params['search'];
      
      this._metalicoService.search(search).subscribe( 
        response => {
         if(response.metalicos){
           this.metalicos = response.metalicos;
          //  this._router.navigate(['/pagina']);
         }else{
          this.metalicos = [];
         }
        },
        error => {
          console.log(error);
          this.metalicos = [];
          
        }
      );
    });
  }

}


