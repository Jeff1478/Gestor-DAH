import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Litico } from '../../models/litico';
import { LiticoService } from 'src/app/services/litico.service';

@Component({
  selector: 'app-search-litico',
  templateUrl: './search-litico.component.html',
  styleUrls: ['./search-litico.component.css'],
  providers : [LiticoService]
})



export class SearchLiticoComponent implements OnInit {

  public liticos: Litico[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _liticoService: LiticoService
  ) { 
    
  }


  ngOnInit(){
    this._route.params.subscribe(params => {
      var search = params['search'];
      
      this._liticoService.search(search).subscribe( 
        response => {
         if(response.liticos){
           this.liticos = response.liticos;
          //  this._router.navigate(['/pagina']);
         }else{
          this.liticos = [];
         }
        },
        error => {
          console.log(error);
          this.liticos = [];
          
        }
      );
    });
  }

}

