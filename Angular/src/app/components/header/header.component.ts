import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchString!: string;
  public usuario!: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public authService : AuthService
  ) { }

  ngOnInit(){
   
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }
 
}
