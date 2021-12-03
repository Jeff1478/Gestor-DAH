import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url_ = 'assets/provincias.json';
  getAll(): any {
    return this.http.get<any>(this.url_);
  }
}
