import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ceramic } from "../models/ceramic";
import { Global } from "./global";


@Injectable()
export class CeramicService {
    [x: string]: any;

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url =Global.url;

    }
    pruebas(){
        return "Soy el servicio de articulos !!"
    }

    getCeramics(last:any = null):Observable<any>{
        var ceramics = 'ceramics';
        
        if(last!= null){
            ceramics = 'ceramics/true';
        }
        return this._http.get(this.url+ceramics);
    }

    getCeramic(ceramicId: string):Observable<any>{
        return this._http.get(this.url+'ceramic/'+ ceramicId);
    }

    search(searchString: string):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

    searchComb(searchString2: string):Observable<any>{
        return this._http.get(this.url+'searchComb/'+searchString2);
    }

    create(ceramic: any):Observable<any>{
        let params = JSON.stringify(ceramic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save/',params, {headers:headers});
    }

    update(id: string, ceramic: any):Observable<any>{
        let params = JSON.stringify(ceramic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'ceramic/'+id, params,{headers: headers});
    }

    delete(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'ceramic/'+id, {headers: headers});

    }
}
