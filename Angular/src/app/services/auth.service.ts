import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://181.193.24.142:3900/apu';

  
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