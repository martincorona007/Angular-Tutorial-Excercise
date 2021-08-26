import { Component } from '@angular/core';
import { PostlogService } from './postlog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post : any;
  constructor(private postblogService: PostlogService){}
  ngOnInit(){
    this.postblogService.retornar().subscribe(result => this.post = result);
  }
}
