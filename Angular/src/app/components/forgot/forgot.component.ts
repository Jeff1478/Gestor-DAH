import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
  providers: [AuthService]
})
export class ForgotComponent implements OnInit {
  form!: FormGroup;
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

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService : AuthService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      
      email: '',
      password: '',
  
    });

    
    
  }

  submit(): void {
   
     this.http.post('http://31.220.97.126:3900/apu/forgot', this.form.getRawValue())
   
    .subscribe(() => this.router.navigate(['/']));
    Swal.fire('Atención', 'Contraseña Actualizada', 'success')
    
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
            localStorage.setItem('email', this.user.email);
                
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

              this.http.post('http://31.220.97.126:3900/apu/forgot', this.form.getRawValue())
   
              .subscribe(() => this.router.navigate(['/']));
              Swal.fire('Atención', 'Contraseña Actualizada', 'success')
              //this.authService.updateAuthStatus(true);
              this.router.navigate(['/home']);
            }     
            //this.router.navigate(['/home']);
          }
    
  }


  