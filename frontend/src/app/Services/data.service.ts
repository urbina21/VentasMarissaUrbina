import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { User } from '../Interfaces/user';
import { throwError, Observable, retry, catchError } from 'rxjs';

import { empresa } from '../Interfaces/user'
import { empleados } from '../Interfaces/user'
import { sucursales } from '../Interfaces/user'
import { clientes } from '../Interfaces/user'
import { areas_trabajo } from '../Interfaces/user'
import { usuario } from '../Interfaces/user'
import { cxcobrar } from '../Interfaces/user'
import { cxpagar } from '../Interfaces/user'
import { detalleventa } from '../Interfaces/user'
import { encabezado_compra } from '../Interfaces/user'
import { encabezado_venta } from '../Interfaces/user'
import { formapago } from '../Interfaces/user'
import { pagos } from '../Interfaces/user'
import { producto } from '../Interfaces/user'
import { proveedor } from '../Interfaces/user'
import { tipoproducto } from '../Interfaces/user'
import { tipousuario } from '../Interfaces/user'




@Injectable({
  providedIn: 'root'
})
export class DataService {

    API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }
    
  getAll(url: string) {
    return this.http.get(`${this.API_URI}` + url);
  }



    getOne(id: string, url: string) {
      return this.http.get(`${this.API_URI}` + url + `/${id}`);
  }

  delete(id: number, url: string) {
    return this.http.delete(`${this.API_URI}` + url + `/${id}`);
  }

  update(id: string|number, updated: User , url: string): Observable<User> {
    return this.http.post(`${this.API_URI}` + url + `/${id}`, updated);
  }

save<T>(Usuario: T, url: string)  {
     let headers = new HttpHeaders();
     headers = new HttpHeaders().set('Content-Type', 'application/json');
     return this.http.post(`${this.API_URI}` + url , JSON.stringify(Usuario), {headers: headers})
     .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
    }


  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}

