import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      token: ['']
  
    }); 
  }

    signIn() {
      this.authService.signInUser(this.form.value)
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
            localStorage.setItem('email', this.form.value.email);
                
      
          },
          err => {console.log(err)
          Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')}
        )
    }
  

    nuevacontra() {
      this.authService.nuevacontra(this.form.value)
        .subscribe(
          res => {
            console.log(res);
            this.token=res
            this.tfaFlag = false;
            this.logFlag = true;
            if (this.logFlag == true) {
              
              Swal.fire('Atención', 'Se le envió a su correo el Token de acceso, copielo y peguelo en la casilla correspondiente', 'success')
            } 
            const { token, userId } = res;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            console.log('Token y User ID guardados en localStorage');
                
            
          },
          err => {console.log(err)
          Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')}
        )
    }
    
          async signInTFA() {
            this.token = localStorage.getItem('token');
            const id = localStorage.getItem('userId');
            
            console.log("Token:", this.token);
            console.log("User ID:", id);
            
            if (this.token === this.form.value.token) {
                //console.log("Form Value:", this.form.value)
                const formData = this.form.getRawValue();
                
                

                console.log("Form Data:", formData);
        
                this.http.put(`https://origenes.museocostarica.go.cr:3900/apu/update/${id}`, formData)
                    .subscribe(
                        response => {
                            Swal.fire('Atención', 'Contraseña Actualizada', 'success');
                            this.router.navigate(['/home']);
                        },
                        error => {
                            console.error("Error al actualizar la contraseña:", error);
                            Swal.fire('Error', 'No se pudo actualizar la contraseña', 'error');
                        }
                    );
            } else {
                Swal.fire('Error', 'Token inválido', 'error');
            }
        }
    
  }


  