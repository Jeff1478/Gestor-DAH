import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  
  
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {

  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', this.user.email);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
  }


       

   
  }



   