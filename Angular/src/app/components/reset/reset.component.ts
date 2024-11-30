import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({

     // email: '',
      password: '',
      password_confirm: ''
     
    });
  }

  submit(): void {

    const formData = this.form.getRawValue();
    const data = {
      ...formData,
      token: this.route.snapshot.params.token
    // email: this.form.
    };


    this.http.post('http://origenes.museocostarica.go.cr/reset', data)

      .subscribe(() => this.router.navigate(['/']));

      
    }
  }
