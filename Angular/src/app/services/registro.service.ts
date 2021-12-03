import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Registro } from "../models/registro";
import { Globalr } from "./globalr";


@Injectable()
export class RegistroService {
    [x: string]: any;

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url =Globalr.url;

    }
    pruebas(){
        return "Soy el servicio de registros !!"
    }

    getRegistros(last:any = null):Observable<any>{
        var registros = 'registros';
        
        if(last!= null){
            registros = 'registros/true';
        }
        return this._http.get(this.url+registros);
    }

    getRegistro(registroId: string):Observable<any>{
        return this._http.get(this.url+'registro/'+ registroId);
    }

    

    create(registro: any):Observable<any>{
        let params = JSON.stringify(registro);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save/',params, {headers:headers});
    }

    update(id: string, registro: any):Observable<any>{
        let params = JSON.stringify(registro);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'registro/'+id, params,{headers: headers});
    }

    
}
