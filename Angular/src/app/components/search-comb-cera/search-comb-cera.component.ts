import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Ceramic } from '../../models/ceramic';
import { CeramicService } from 'src/app/services/ceramic.service';

@Component({
  selector: 'app-search-comb-cera',
  templateUrl: './search-comb-cera.component.html',
  styleUrls: ['./search-comb-cera.component.css'],
  providers: [CeramicService]
})
export class SearchCombCeraComponent implements OnInit {

  public ceramics: Ceramic[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _ceramicService: CeramicService
  ) { }

  ngOnInit(){
    this._route.params.subscribe(params => {
      var search = params['search'];
      this._ceramicService.searchComb(search).subscribe(
        response => {
         if(response.ceramics){
           this.ceramics = response.ceramics;
          //  this._router.navigate(['/pagina']);
         }else{
          this.ceramics = [];
         }
        },
        error => {
          console.log(error);
          this.ceramics = [];
        }
      );
    });

    
  }
  }









