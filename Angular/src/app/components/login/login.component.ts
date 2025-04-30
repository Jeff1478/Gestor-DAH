import { Component, OnInit} from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupOrigenesComponent } from '../popup-origenes/popup-origenes.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
    nombre: '',
    token:''
  }

  tfaFlag: boolean = true
  logFlag: boolean = false
  token:any 
  public searchString!: any;
  
  
  constructor(public dialog: MatDialog, private authService : AuthService, private router : Router) { }

  ngOnInit() {

  }

  openDialog(){
    let dialogRef = this.dialog.open(PopupOrigenesComponent);

    dialogRef.afterClosed().subscribe(result =>{
      // console.log(result);
      if(result){
      this.router.navigate(['/registro']);
      }
     
    });
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.token=res
          this.tfaFlag = false;
          this.logFlag = true;
          if (this.logFlag == true) {
            
            Swal.fire('Atención', 'Se le envió a su correo el Token de acceso, copielo y peguelo en la casilla correspondiente', 'success')
          } 
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', res.email);
          localStorage.setItem('nombre', res.nombre);    
          //this.router.navigate(['/home']);
        },
        err => {console.log(err)
        Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')}
      )
  }

  signInTFA() {
 
          this.token=localStorage.getItem('token')
          //console.log(this.token)
          this.tfaFlag = true;
          this.logFlag = false;
         
          if (this.token == this.user.token) {
            //this.authService.updateAuthStatus(true);
            this.router.navigate(['/dashboard']);
          }     
          //this.router.navigate(['/home']);
        }
  

}

   