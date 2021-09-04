import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user = {
    email: '',
    password: '',
    nombre: '',
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', this.user.nombre);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

}

