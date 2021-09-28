import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Metalico } from '../../models/metalico';
import { MetalicoService } from 'src/app/services/metalico.service';

@Component({
  selector: 'app-search-comb-met',
  templateUrl: './search-comb-met.component.html',
  styleUrls: ['./search-comb-met.component.css'],
  providers: [MetalicoService]
})
export class SearchCombMetComponent implements OnInit {
  public metalicos: Metalico[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _metalicoService: MetalicoService
  ) { }

  ngOnInit(){
    this._route.params.subscribe(params => {
      var search = params['search'];
      this._metalicoService.searchComb(search).subscribe(
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







 