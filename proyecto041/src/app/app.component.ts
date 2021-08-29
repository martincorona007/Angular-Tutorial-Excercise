import { Component } from '@angular/core';
import { PostblogService } from './postblog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post : any;
  titulosColumnas = ['Codigo de usuario','codigo de post', 'titulo','descripcion'];
  constructor(private postblogService: PostblogService){

  }
  ngOnInit(){
    this.postblogService.retornar().subscribe(result => this.post = result);
  }
}
