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
  public title: string;
  public logueado: boolean;
  public aguacaliente: boolean;
  public separado: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public authService : AuthService
  ) {
    this.title = '';
    this.usuario = '';
    this.separado = '';
    this.logueado = false;
    this.aguacaliente = false;
   }

  ngOnInit(){

    this.authService.search(localStorage.getItem('email'))
    .subscribe(
      res => {
        if(res.usuarios){
          this.usuario = res.usuarios;
          this.title = JSON.stringify(this.usuario, ['email'])
          
          if (this.title == '[{"email":"informatica@museocostarica.go.cr"}]'){
            this.logueado = true;
            this.aguacaliente = false;
            
          } else if (this.title == '[{"email":"gmongem@museocostarica.go.cr"}]'){
            this.logueado = true;
            this.aguacaliente = false;
          }
         else if (this.title == '[{"email":"jbrenes@museocostarica.go.cr"}]'){
          this.logueado = true;
          this.aguacaliente = false;
        }
        else if (this.title == '[{"email":"lsanchez@museocostarica.go.cr"}]'){
          this.logueado = true;
          this.aguacaliente = false;
        }
          else {
            this.aguacaliente = true;
            this.logueado = false;
            
          }
        }
      },
      err => {console.log(err)
      });  
   
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }
 
}
