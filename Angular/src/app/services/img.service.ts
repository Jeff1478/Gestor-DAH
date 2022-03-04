import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http: HttpClient) { }

  url_ = 'http://181.193.24.142:3900/apis/';
  getAll(): any {
    return this.http.get<any>(this.url_);
  }
}