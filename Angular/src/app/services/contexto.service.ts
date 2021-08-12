import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contexto } from "../models/contexto";
import { GlobalC } from "./globalc";


@Injectable()
export class ContextoService {
    [x: string]: any;

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url =GlobalC.url;

    }
    pruebas(){
        return "Soy el servicio de articulos !!"
    }

    getContextos(last:any = null):Observable<any>{
        var contextos = 'contextos';
       
        if(last!= null){
          
            contextos = 'contextos/true';
        }
        return this._http.get(this.url+contextos);
    }

    getContexto(contextoId: string):Observable<any>{
        return this._http.get(this.url+'contexto/'+ contextoId);
    }

    search(searchString: string):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

    create(contexto: any):Observable<any>{
        let params = JSON.stringify(contexto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save/',params, {headers:headers});
    }

    update(id: string, contexto: any):Observable<any>{
        let params = JSON.stringify(contexto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'contexto/'+id, params,{headers: headers});
    }

    delete(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'contexto/'+id, {headers: headers});

    }

}