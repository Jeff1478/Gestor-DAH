import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Globallit } from "./globallit";


@Injectable()

export class LiticoService {
    [x: string]: any;

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url =Globallit.url;

    }
    pruebas(){
        return "Soy el servicio de articulos !!"
    }

    getLiticos(last:any = null):Observable<any>{
        var liticos = 'liticos';
       
        if(last!= null){
          
            liticos = 'liticos/true';
        }
        return this._http.get(this.url+liticos);
    }

    getLitico(liticoId: string):Observable<any>{
        return this._http.get(this.url+'litico/'+ liticoId);
    }

    search(searchString: string):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

    searchComb(searchString2: string):Observable<any>{
        return this._http.get(this.url+'searchCombLit/'+searchString2);
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

}