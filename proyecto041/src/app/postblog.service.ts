import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  constructor(private http: HttpClient) { }
  retornar(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
