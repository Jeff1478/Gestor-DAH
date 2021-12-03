import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Suscripcion } from 'src/app/models/suscripcion';
import { HttpService } from "src/app/services/http.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistroService } from 'src/app/services/registro.service';
import { Registro } from 'src/app/models/registro';


@Component({
  selector: 'app-registro-origenes',
  templateUrl: './registro-origenes.component.html',
  styleUrls: ['./registro-origenes.component.css'],
  providers: [RegistroService]
})
export class RegistroOrigenesComponent implements OnInit {
  
  loading = false;
  buttionText = "Enviar";
  public registro!: Registro;
  public status!: String;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  perfilFormControl = new FormControl("", [
    Validators.required,
    
  ]);

  setenaFormControl = new FormControl;

  constructor(public http: HttpService, private _router: Router, private _registroService: RegistroService) { }

  

  suscripciones: any[] = [];

  ngOnInit(){
    for (let item in Suscripcion) {
      if (isNaN(Number(item))) {
        this.suscripciones.push({ text: item, value: Suscripcion[item] });
      }
    }
    console.log(this.http.test);
  }


  register() {
    
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      perfil: this.perfilFormControl.value,
      setena: this.setenaFormControl.value
    }

    

    this.http.sendEmail("http://181.193.24.142:3900/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
        Swal.fire(

          'Registro Usuario',
  
          'Correo Enviado con Éxito',
  
          'success'
        )
        this.Registro();
        this._router.navigate(['/pag-ori']);
      },
      err => {
        console.log(err);
      }
    );


  }


  Registro(){

    let reg = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      perfil: this.perfilFormControl.value,
      setena: this.setenaFormControl.value
    }

    this._registroService.create(reg).subscribe(
      
      response => {
       if(response.status == 'success'){
         this.status = 'success';
         this.registro = response.registro;
         
       }else{
         this.status = 'error'
       }
      },
      error => {
       console.log(error);
       this.status = 'error';
      }
    );
   }
 
   
  

}
  
