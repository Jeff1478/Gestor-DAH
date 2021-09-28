import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { GlobalM } from "./globalmet";


@Injectable()
export class MetalicoService {
    [x: string]: any;

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url =GlobalM.url;

    }
    pruebas(){
        return "Soy el servicio de articulos !!"
    }

    getMetalicos(last:any = null):Observable<any>{
        var metalicos = 'metalicos';
       
        if(last!= null){
          
            metalicos = 'metalicos/true';
        }
        return this._http.get(this.url+metalicos);
    }

    getMetalico(metalicoId: string):Observable<any>{
        return this._http.get(this.url+'metalico/'+ metalicoId);
    }

    search(searchString: string):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

    searchComb(searchString2: string):Observable<any>{
        return this._http.get(this.url+'searchCombMet/'+searchString2);
    }

    create(metalico: any):Observable<any>{
        let params = JSON.stringify(metalico);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save/',params, {headers:headers});
    }

    update(id: string, metalico: any):Observable<any>{
        let params = JSON.stringify(metalico);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'metalico/'+id, params,{headers: headers});
    }

    delete(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'metalico/'+id, {headers: headers});

    }

}