import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  retornar(){
    return this.http.get("https://www.scratchya.com.ar/angular/personas.php");
  }
}
