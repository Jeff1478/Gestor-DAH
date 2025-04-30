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

/*   ngOnInit(){

    this.authService.search(localStorage.getItem('email'))
    .subscribe(
      res => {
        if(res.usuarios){
          this.usuario = res.usuarios;
          this.title = JSON.stringify(this.usuario, ['email'])
          //console.log(this.title);
          
          if (this.title == '[{"email":"jtapia@museocostarica.go.cr"}]'){
            this.logueado = true;
            this.aguacaliente = true;
            
          } else if (this.title == '[{"email":"gmongem@museocostarica.go.cr"}]'){
            this.logueado = true;
            this.aguacaliente = true;
          }

        else if (this.title == '[{"email":"lsanchez@museocostarica.go.cr"}]'){
          this.logueado = true;
          this.aguacaliente = true;
        }
        else if (this.title == '[{"email":"cruiz@museocostarica.go.cr"}]'){
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
   
  } */

      ngOnInit() {
        const email = localStorage.getItem('email');
      
        this.authService.search(email).subscribe(
          res => {
            if (res.usuarios && res.usuarios.length > 0) {
              this.usuario = res.usuarios[0]; // asumimos que solo retorna uno
              const correo = this.usuario.email;
      
              this.logueado = true;
      
              // Usuarios especiales con acceso a Agua Caliente
              const accesoAgua = [
                'jtapia@museocostarica.go.cr',
                'gmongem@museocostarica.go.cr',
                'lsanchez@museocostarica.go.cr'
              ];
      
              this.aguacaliente = accesoAgua.includes(correo);
      
            } else {
              // No se encontró usuario válido
              this.logueado = false;
              this.aguacaliente = false;
            }
          },
          err => {
            console.error('Error al buscar usuario:', err);
            this.logueado = false;
            this.aguacaliente = false;
          }
        );
      }
      
  goSearch(){
    this._router.navigate(['/buscar', this.searchString]);
  }
 
}
