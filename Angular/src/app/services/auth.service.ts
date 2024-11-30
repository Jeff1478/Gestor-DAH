import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // private URL = 'http://181.193.24.142:3900/apu'; Museo
    private URL = 'http://31.220.97.126:3900/apu';

   //private URL = 'apu';
    //private URL = '/apu';
   //private URL = 'https://localhost:3900/apu';

    _isLoggedIn: boolean = false

  

  
  constructor(private http: HttpClient, private router: Router) { 
   
  }



  signUpUser(user: {}) {
  
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user: any) {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.post<any>(this.URL + '/signin', user, {'headers':headers});
  }

  updateAuthStatus(value: boolean) {
    this._isLoggedIn = value
    //this.authSub.next(this._isLoggedIn);
    localStorage.setItem('isLoggedIn', value ? "true" : "false");
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  search(searchString: any){
    return this.http.get<any>(this.URL + '/search/' +searchString);
}


}