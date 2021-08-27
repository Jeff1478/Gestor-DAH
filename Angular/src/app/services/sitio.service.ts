import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Globals } from "./globals";


@Injectable()
export class SitioService {
    [x: string]: any;

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url =Globals.url;

    }
    pruebas(){
        return "Soy el servicio de sitios !!"
    }

    getSitios(last:any = null):Observable<any>{
        var sitios = 'sitios';
       
        if(last!= null){
          
            sitios = 'sitios/true';
        }
        return this._http.get(this.url+sitios);
    }

   /*  getLitico(liticoId: string):Observable<any>{
        return this._http.get(this.url+'litico/'+ liticoId);
    }

    search(searchString: string):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

    create(litico: any):Observable<any>{
        let params = JSON.stringify(litico);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save/',params, {headers:headers});
    }

    update(id: string, litico: any):Observable<any>{
        let params = JSON.stringify(litico);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'litico/'+id, params,{headers: headers});
    }

    delete(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'litico/'+id, {headers: headers});

    }
 */
}